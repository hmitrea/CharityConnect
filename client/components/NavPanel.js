import React from 'react';

export default function NavPanel({ login, setLogin }){
    return (
        <div className='navpanel'>
            <h2>Charity Connect</h2>
            <br/>
            {login.state === true ? <h3>{login.name}: <a href='/logout'>Logout</a></h3> : null}
        </div>
    )
}