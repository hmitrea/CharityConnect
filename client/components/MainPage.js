import React from 'react';
import CharitiesDisplay from './CharitiesDisplay';
import SavedDisplay from './SavedDisplay';

export default function MainPage(){
    return (
        <div className='main-container'> 
            <CharitiesDisplay />
            <SavedDisplay />
        </div>
    )
}