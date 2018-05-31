import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component{

  handleLogout = () => {
    localStorage.removeItem("myRandomToken")
    localStorage.removeItem("id")
  }

  render(){
    return(
      <div className="navbar">
        <Menu color='grey' pointing secondary>
        { localStorage.getItem('myRandomToken') ?
        <div className="left menu">
            <NavLink className="item" to="/dashboard"> Dashboard </NavLink>
            <NavLink className="item" to="/mylessons"> My Lessons </NavLink>
            <NavLink className="item" to="/myschedule"> My Schedule </NavLink>
            <NavLink className="item" to="/login" onClick={this.handleLogout}> Logout </NavLink>

           </div> : <div className="right menu">
            <NavLink className="item" to="/login"> Login </NavLink>
            <NavLink className="item" to="/signup"> Signup </NavLink>
          </div>
          }
        </Menu>
      </div>
    )
  }
}

export default Nav
