import React from 'react'
import Feed from './feed'

export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'feed'
        }
    }

    render() {
        return (
            <div id="content">
                { this.state.type == 'feed' ? <Feed /> : '' }
            </div>
        )
    }
}