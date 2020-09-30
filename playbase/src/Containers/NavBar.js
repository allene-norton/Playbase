import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

export default class MenuExampleSecondary extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu secondary>
                <Menu.Item
                    as={NavLink} to="/playbase"
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={NavLink} to="/search"
                    name='search for albums'
                    active={activeItem === 'search'}
                    onClick={this.handleItemClick}
                />
                {/* <Menu.Item
                    as={NavLink} to="/shelf"
                    name='my profile'
                    active={activeItem === 'shelf'}
                    onClick={this.handleItemClick}
                /> */}
            </Menu>

        )
    }
}