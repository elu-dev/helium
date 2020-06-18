import React from 'react'
import STATE from './_global'

export default class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="blob" id="newpost">
                <input type="text" />
                <button>Send</button>
            </div>
        )
    }
}