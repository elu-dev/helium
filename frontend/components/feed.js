import React from 'react'
import Post from './post'
import STATE from './_global'

export default class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    // changer() {
    //     STATE.posts[0].comment = 'omg it works!'
    //     this.forceUpdate()
    // }

    render() {
        return (
            <div id="feed">
            {/* <button onClick={this.changer.bind(this)}>Do Something</button> */}
                { STATE.posts.map(post => <Post userID={post.userID} imgURL={post.imgURL} comment={post.comment} />) }
            </div>
        )
    }
}