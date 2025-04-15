import React from 'react'
import { useParams } from 'react-router'

export default function Events() {

    const params = useParams();

    return (
        <div>
            <h1>Events</h1>
            <h2>{params.testimonyID}</h2>
        </div>
    )
}
