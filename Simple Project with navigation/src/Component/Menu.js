import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div >
                <ul className='navbar' style={{ listStyleType: 'none' }}>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/Calculator">Calculator</Link>
                    </li>
                    <li>
                        <Link to="/DataColection">DataColection</Link>
                    </li>
                    <li>
                        <Link to="/FlaverTest">FlaverTest</Link>
                    </li>
                    <li>
                        <Link to="/Age">Age</Link>
                    </li>
                    <li>
                        <Link to="/NewYear">NewYear</Link>
                    </li>
                    <li>
                        <Link to="/Player">Player</Link>
                    </li>
                    <li>
                        <Link to="/Test">Test</Link>
                    </li>
                </ul>
                <Outlet />
            </div>

        )
    }
}

export default Menu;