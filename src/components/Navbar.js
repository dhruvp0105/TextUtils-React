import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        {props.title}
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">
                                    About
                                </a> */}

                                <NavLink className="nav-link" to='/about'>About</NavLink>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"></input>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
