import React from 'react'
import { Link, Outlet } from 'react-router';

export default function Testimony() {
  const events = [1, 2, 3, 4];
  return (
    <section>
      <h2>Testimony</h2>
      {events.map((eve) => (
        <Link key={eve} to={`/testimony/${eve}`} viewTransition>
          Testimony {eve} <br />
        </Link>
      ) )}
      <Outlet />
    </section>
  )
}
