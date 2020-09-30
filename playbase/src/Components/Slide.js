import React from 'react'

function Slide({ slide, offset, setDisplayPlayer }) {
    function useTilt(active) {
        const ref = React.useRef(null);

        React.useEffect(() => {
            if (!ref.current || !active) {
                return;
            }

            const state = {
                rect: undefined,
                mouseX: undefined,
                mouseY: undefined
            };

            let el = ref.current;

            const handleMouseMove = (e) => {
                if (!el) {
                    return;
                }
                if (!state.rect) {
                    state.rect = el.getBoundingClientRect();
                }
                state.mouseX = e.clientX;
                state.mouseY = e.clientY;
                const px = (state.mouseX - state.rect.left) / state.rect.width;
                const py = (state.mouseY - state.rect.top) / state.rect.height;

                el.style.setProperty("--px", px);
                el.style.setProperty("--py", py);
            };

            el.addEventListener("mousemove", handleMouseMove);

            return () => {
                el.removeEventListener("mousemove", handleMouseMove);
            };
        }, [active]);

        return ref;
    }
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    const spotify_id = slide.spotify_id
    const albumURI = `spotify:album:${spotify_id}`
    const handleClick = () => {
        setDisplayPlayer(albumURI)
    }

    

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
            }}
        >
            <div
                className="slideBackground"
                style={{
                    backgroundImage: `url('${slide.image_url}')`
                }}
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image_url}')`
                }}
            >
                <div className="slideContentInner">
                    <h2 className="slideTitle">{slide.name}</h2>
                    <h3 className="slideSubtitle">{slide.artist}</h3>
                    <div onClick={handleClick} className="button"><p>Play Album</p> </div>
                    {/* <p className="slideDescription">{slide.description}</p> */}
                </div>
            </div>
        </div>
    );
}

export default Slide