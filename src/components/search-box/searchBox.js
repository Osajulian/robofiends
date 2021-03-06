import React from 'react';

const searchBox = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                onChange={searchChange}
                placeholder="search robots"/>
        </div>
    )
}

export default searchBox;