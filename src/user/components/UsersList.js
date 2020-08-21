import React from 'react'

import UserItem from './UserItem'
import './UsersList.css'


const UsersList = (props) => {

    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>Nie ma żadnego użytkowniaka</h2>
            </div>
        )

    }
    return (
        <ul className="users-list">
            {props.items.map(item =>
                <UserItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    placeCount={item.places}
                />
            )}
        </ul>
    )
}

export default UsersList