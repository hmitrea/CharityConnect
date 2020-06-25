import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Charity from './Charity';

export default function CharitesDisplay (){
    const [charities, setCharities] = useState({})

    return (
        <div className='charity-display'>
            Charity Display
        </div>
    )

}