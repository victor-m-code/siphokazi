import React from 'react'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section>
        <h1>404 NotFound</h1>   
        <Link to="/">Go Home</Link> 
    </section>
  )
}
