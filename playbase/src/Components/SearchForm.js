import React, { Component } from 'react'
import ResultsContainer from '../Containers/ResultsContainer'


class SearchForm extends Component {
    state = {
        searchTxt: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getAlbum(this.state.searchTxt)
    }

    handleChange = (e) => {
        this.setState({ searchTxt: e.target.value })
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" onChange={(e) => this.handleChange(e)}></input>
                    <input type="submit"></input>
                </form>
                <ResultsContainer albumSearchResult={this.props.albumSearchResult}
                    postAlbum={this.props.postAlbum} />

            </div>
        )
    }
}

export default SearchForm