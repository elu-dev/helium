import React from 'react'
import STATE from './_global'

const Nav = props => (
    <div className="col-3 d-none d-md-block">
        <div className="sticky-top h_stickfix">
            <div className="blob h_nav">
                {
                    STATE.user.token ? <div className="h_nav_row">Profile</div>
                                     : <div className="h_nav_row">Login</div>
                }
                
                <div className="h_nav_row">Settings</div>
            </div>
        </div>
    </div>
)


export default Nav