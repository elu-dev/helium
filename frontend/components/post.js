import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = props
    }

    render() {
        return (
            <div className="post">
                <div className="blob">
                    <img src={ this.props.imgURL } alt="picture"/>
                    <h1> @{ this.props.userID } </h1>
                    <p> { this.props.comment } </p>                
                </div>
            </div>
        )
    }
}