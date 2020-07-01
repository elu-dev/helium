import React from 'react'
import Post from './post'
import STATE from './_global'
import NewPost from './newpost'

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
            <div className="blob h_feed">
                { STATE.user.token ? <NewPost /> : '' }
                { STATE.posts.map(post => <Post userID={post.userID} imgURL={post.imgURL} comment={post.comment} />) }
            </div>
        )
    }
}