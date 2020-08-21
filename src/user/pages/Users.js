import React from 'react'

import UsersList from '../components/UsersList'

export default function Users() {
const USERS=[
    { 
        id:1,
        image:'https://avatars1.githubusercontent.com/u/61684821?s=460&u=f941ae93f1a1954ee518bd2fdf728ebdc89017aa&v=4',
        name:'Maciej',
        places:"Sahara Desert"

},
    {
        id: 2,
        image: 'https://fajnelogo.pl/html/public/images/files/YmVgtlJ9NCqwxhoMdO0pD2e4bAQEFaIR1BGjU5ZuWXv6yfTsHrzcPS8ki3nK7L/14064/5cffc40b8abb2_woman.jpg',
        name: 'Sara',
        places: "Sahara M"

    }
];


    return (
        <UsersList items={USERS}/>
    )
}
