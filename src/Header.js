import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {   
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/home">Akhbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="country">{this.props.country?this.props.country:'Here'}</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Politics</a>
                            <a className="dropdown-item" href="#">Business</a>
                            <a className="dropdown-item" href="#">Social</a>
                            <a className="dropdown-item" href="#">Sport</a>
                            <a className="dropdown-item" href="#">Art</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Weather</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                    <button className="btn btn-outline-light my-2 my-sm-0 col" type="submit">Search</button>
                </form>
            </div>
        </nav>
        )
    }
}
