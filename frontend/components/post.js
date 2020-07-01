import React from 'react'

export default class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = props
    }

    render() {
        return (
            <div className="h_post">
                <img src={ this.props.imgURL } alt="post_picture" />
                <h1> @{ this.props.userID } </h1>
                <p> { this.props.comment } </p>
                <div className="h_p_likes"> &lt;3 5 </div>
            </div>
        )
    }
}