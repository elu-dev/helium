import React from 'react'
import Post from './post'

export default class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
                {
                    userID: "test",
                    imgURL: "http://localhost:3001/img/test.jpg",
                    comment: "Moon <3"
                }
            ]
        }
    }

    render() {
        return (
            <div id="feed">
                {
                    this.state.posts.map(post => {
                        console.log(post);
                        return <Post userID={post.userID} imgURL={post.imgURL} comment={post.comment} />
                    })
                }
            </div>
        )
    }
}