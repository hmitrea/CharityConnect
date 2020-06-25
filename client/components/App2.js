import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavPanel from './NavPanel';
import Login from './Login';
import MainPage from './MainPage';

export default function App2(){
    const [login, setLogin] = useState({state: false, id: null, name: null})
    useEffect(() => {
        //check to see if token cookie is there
        const value = `${document.cookie}`
        if(value){
            const target = value.split(`token=`)[1]
            if(target){
                const data = target.split('-')
                setLogin({state: true, id: data[1], name: data[0]})
            }
        }
    }, [])
    return (
        <div>
            <NavPanel login={login} setLogin={setLogin}/>
            { login.state === true ? <MainPage /> : <Login login={login} setLogin={setLogin} />}
        </div>

    )
}