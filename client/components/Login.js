import React from 'react';
import axios from 'axios';

export default function Login(){
    const handleSubmit = (event)=>{
        event.preventDefault();

    }
    return (
        <div className='login'>
            <div className='oauth'>
                <a className="twitterButton" href="/login/twitter">
                    <svg
                    className="twitterIcon"
                    height="46px"
                    width="46px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    xmlSpace="preserve"
                    >
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578 9.3 9.3 0 0 1-2.958 1.13 4.66 4.66 0 0 0-7.938 4.25 13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.692 4.692 0 0 1-2.104.08 4.661 4.661 0 0 0 4.352 3.234 9.348 9.348 0 0 1-5.786 1.995 9.5 9.5 0 0 1-1.112-.065 13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41z" />
                    </svg>
                    <br/>
                    <span>Log in with Twitter</span>
                </a>
            </div>
            <br/>
            <div className='signup'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">username: </label>
                    <input type="text" id="username" name="username" placeholder='username'/><br/><br/>
                    <label htmlFor="lname">password: </label>
                    <input type="password" id="password" name="password" placeholder='password'/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form> 
            </div>
        </div>
    )
}