import React from 'react'

import Logo from './logo'
import Nav from './nav'
import Trends from './trends'
import Content from './content'

export default class App extends React.Component {
    render() {
        return (
            <div className="container">

                <Logo />

                <div className="row">
                    <Nav />
                    <Content />
                    <Trends />

                </div>
            </div>
        )
    }
}
