import React from 'react'
import Feed from './feed'
import STATE from './_global'

export default class Content extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-12 col-md-9 col-lg-6">
                <div className="h_stickfix">
                    { STATE.contentType == 'feed' ? <Feed /> : '' }
                </div>
            </div>
        )
    }
}