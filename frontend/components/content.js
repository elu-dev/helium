import React from 'react'
import Feed from './feed'
import STATE from './_global'

export default class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="content">
                { STATE.contentType == 'feed' ? <Feed /> : '' }
            </div>
        )
    }
}