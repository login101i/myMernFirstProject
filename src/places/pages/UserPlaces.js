import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: "p1",
        title: "Kraków",
        description: 'Najpiękniejsze miasto w Polsce',
        imageUrl: 'https://www.polska.travel/images/pl-PL/glowne-miasta/krakow/krakow_rynek_2_1170.jpg',
        address: "88-200 Kraków Poland",
        location: {
            lat: 52.6191337,
            lng: 18.514,
        },
        creator: 'u1'
    },
    {
        id: "p2",
        title: "Toruń",
        description: 'Najpiękniejsze miasto w Polsce',
        imageUrl: "https://i.pinimg.com/originals/de/17/be/de17bed8c25c1e616c74bf23c422645b.jpg",
        address: "88-200 Toruń Poland",

        location: {
            lat: 52.6191337,
            lng: 18.514,
        },
        creator: 'u2'
    }

]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

    return (
        // <PlaceList items={DUMMY_PLACES} />
        <PlaceList items={loadedPlaces} />

    )
}

export default UserPlaces