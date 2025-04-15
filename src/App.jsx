import { Link, Outlet } from 'react-router'
import  logo  from './assets/img/logo.png'
import './App.css'

function App() {

  function toggleNuv(){
    let navElem = document.querySelector('nav');
    navElem.classList.toggle('hide')
  }
  function closeNuv(){
    let navElem = document.querySelector('nav');
    navElem.classList.remove('hide')
  }

  return (
    <>
      <header className='bg-img'>
        <div className="brand">
          <img src={logo} alt="Siphokazi" width={50}/>
          <h4>Siphokazi</h4>
        </div>
        <div className="toggler" onClick={toggleNuv}>
          <h5><i className='fa fa-bars'></i></h5>
        </div>
        <nav onClick={closeNuv}>
          <Link to={'/'} viewTransition>Home</Link>
          <Link to={'/about'} viewTransition>About</Link>
          <Link to={'/services'} viewTransition>Services</Link>
          <Link to={'/gallery'} viewTransition>Gallery</Link>
          <Link to={'/testimony'} viewTransition>Testimony</Link>
          <Link to={'/contact'} viewTransition>Contact</Link>
        </nav>
      </header>
      <main onClick={closeNuv}>
        <Outlet />
      </main>
      <footer className='bg-img'>
        <p>
          Maid with Love By <Link to={'/'}>VictorM</Link>
        </p>
      </footer>
    </>
  )
}

export default App
