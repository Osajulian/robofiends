import React from 'react';
import Card from '../card/card'

const cardList = ({robots}) => {
    return (
        <div>
        {
           robots.map((user, i) => {
        return <Card 
                    key={user.id} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} />
    })
}
        </div>
    )
}

export default cardList;