import React from 'react'
import Category from './category';
import Advisory from './advisory';
import State from './state';


// address - city, state, zip
// category - category
// cause 
// ratingNumber
// advisory



export default function FilterPanel() {
    return (
        <div>
          <div className="filterContainer">
            <Category />
            <Advisory />
            <State />
            <input type="submit" value="Submit" onClick={() => fetchData()} />
          </div>
        </div>
    )
}
