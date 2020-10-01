import React, { Component } from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'

export default class MenuExampleSecondary extends Component {
    // state = { activeItem: 'home' }

    // handleItemClick = (e, { name }) => {
    //     this.setState({ activeItem: name })
    // }

    handleLogout = () => {
        this.props.logout()
    }

    render() {
        // const { activeItem } = this.state

        return (
            <div className="playbase-menu">
                <nav>
                    <ul className='menuItems'>
                    <li
                
                        name='home'
                        // active={activeItem === 'home'}
                        // onClick={this.handleItemClick}
                    ><Link to="/playbase" >Home</Link></li>
                    <li
                        
                        name='search for albums'
                        // active={activeItem === 'search'}
                        // onClick={this.handleItemClick}
                    ><Link to="/search" >Search</Link></li>
                    <li
                        
                        name='log out'
                        // active={activeItem === 'log out'}
                        // onClick={this.handleLogout}
                    ><a onClick={this.handleLogout} data-item='logout' as={NavLink} to="/">Log Out</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}