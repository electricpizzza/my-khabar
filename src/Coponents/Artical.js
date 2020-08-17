import React, { Component } from 'react'

export default class Artical extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div class="row container-fluid p-2 m-2">
        <a class="container-fluid col-md-4" href={this.props.url}>
            <img class="col" src={this.props.urlToImage}alt={this.props.title}/>
        </a>
        <div class="col-md-8 d-flex flex-column p-2">
            <h3>{this.props.title}</h3>
            <h5>{this.props.description}</h5>
            <span>By - {this.props.author}</span>
        </div>
        <hr/>
    </div>
        )
    }
}
