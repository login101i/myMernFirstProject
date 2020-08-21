import React from 'react'
import { Link } from 'react-router-dom'


import './UserItem.css'
import Avatar from '../../shared/UIElements/Avatar'
import Card from '../../shared/UIElements/Card'

const UserItem = ({ id, name, image, alt, placeCount }) => {
    return (
        <React.Fragment>
            <li className="user-item">
                <Card className="user-item__content">
                    <Link to={`/${id}/places`}>
                        <div className="user-item__image">
                            <Avatar
                                image={image}
                                alt={alt}

                            />
                        </div>
                        <div className="user-item__info">
                            <h2>{name}</h2>
                            <h3>{placeCount} {placeCount === 1 ? 'Place' : "Places"}</h3>
                        </div>
                    </Link>
                </Card>

            </li>
        </React.Fragment>

    )
}

export default UserItem