import React, { Component } from 'react'

class SearchForm extends Component {
    state = {
        searchTxt: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getAlbum(this.state.searchTxt)
    }

    handleChange = (e) => {
        this.setState({searchTxt: e.target.value})
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" onChange={(e) => this.handleChange(e)}></input>
                    <input type="submit"></input>
                </form>

            </div>
        )
    }
}

export default SearchForm