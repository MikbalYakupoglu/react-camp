import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { Link, useNavigate } from 'react-router-dom'

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const navigate  = useNavigate()

  function handleSignIn() {
    setIsAuthenticated(true)  
  }

  function handleSignOut() {
    setIsAuthenticated(false)  
    navigate("/")
  }

  return (
    <div>
      <Menu inverted>
      <Link to={"/"}><Menu.Item name='home'></Menu.Item></Link>

        <Menu.Menu position='right'>
          <CartSummary />
          {isAuthenticated 
          ? <SignedIn signOut={handleSignOut}/> 
          : <SignedOut signIn={handleSignIn}/>}
        </Menu.Menu>
      </Menu>
    </div>
  )
}
