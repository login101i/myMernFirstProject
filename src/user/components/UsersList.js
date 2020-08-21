import React from 'react'

import UserItem from './UserItem'
import './UsersList.css'
import Card from '../../shared/Components/UIElements/Card'


const UsersList = (props) => {

    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>Nie ma żadnego użytkowniaka</h2>
                </Card>
             
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