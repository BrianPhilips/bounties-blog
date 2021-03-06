import React, {Component} from 'react'
import Link from 'gatsby-link'

import logo from '../img/amazix_rewards_logo.png'


export default class Navbar extends Component {
    state = {
      visible: true,
    };

  toggleMenu = () => {
      this.setState({
        showMenu: !this.state.showMenu
      })
    }

  render() {    
    const menuActive = this.state.showMenu ? 'menu_collapsed' : '';
    const burgerActive = this.state.showMenu ? 'menu_collapsed' : '';
    return (
      <nav className="root">
        <div className="wrapper">
          <div className="left">
            <div className="logo">
              <a href="https://www.bounties.biz/">
                <figure>
                  <img src={logo} alt="Amazix Rewards" />
                </figure>
              </a>
            </div>
            <a className="menu-button" id="menu_button" onClick={this.toggleMenu}>
              <i className="fa fa-bars"></i>
            </a>        
          </div>

          <div className="navbar-end right">

              <ul className={`mainnav menu_collapsed" ${menuActive}`} >
                <li className="nav-item cl-effect-1">
                  <a className="nav-item" href="https://www.bounties.biz/">
                    Rewards
                  </a>   
                </li>
                <li className="nav-item cl-effect-1">
                  <a className="nav-item" href="https://www.bounties.biz/contests">
                    Contests
                  </a>
                </li>
                <li className="nav-item cl-effect-1">
                  <a className="nav-item" href="https://www.bounties.biz/lotteries">
                    Lotteries
                  </a>            
                </li>
                <li className="nav-item cl-effect-1">
                  <Link className="nav-item" to="/">
                    Blog
                  </Link> 
                </li>
                <li className="nav-item cl-effect-1">
                  <a href="http://amazix.com" target="_blank">
                    Amazix.com
                  </a>  
                </li>
                <li className="nav-item cl-effect-1">
                  <a className="navbar-item cta" href="mailto:contact@amazix.com?subject=I want to list my project on Amazix Bounties">List your project</a>
                </li>                             
              </ul>            
          </div>
        </div>

         
      </nav>
    
    )
  }
}
