import React, {Component} from 'react'
import Link from 'gatsby-link'

import logo from '../img/amazix_rewards_logo.png'


export default class Footer extends Component {
  render() {
    return (
      <div className="comp__footer__root">
        <div className="comp__footer_container">
            <div className="comp__footer__row">
                <div className="comp__footer__left">
                    <form action="https://amazix.us17.list-manage.com/subscribe/post?u=7fe19aa618fe86fac5a6da184&amp;id=8586cd2c51" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate comp__footer__form" target="_blank" noValidate>
                          <input type="email" value="" name="EMAIL" className="required comp__footer__email" id="mce-EMAIL" placeholder="Enter your email to receive new projects" />
                          <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                          <div id="mce-responses" className="clear">
                              <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                              <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                              </div>    
                              <div  aria-hidden="true">
                                  <input type="text" name="b_7fe19aa618fe86fac5a6da184_8586cd2c51" tabIndex="-1" value="" style={{display: 'none'}} />
                              </div>
                    </form>
                </div>

                <div className="comp__footer__right">
                    or follow us on
                    <a className="comp__footer__link" target="_blank" href="https://medium.com/@amazix.bounties"><i className="fab fa-medium-m"></i></a>
                    <a className="comp__footer__link" target="_blank" href="https://twitter.com/amazix_bounties"><i className="fab fa-twitter"></i></a>
                    <a className="comp__footer__link" target="_blank" href="https://t.me/amazix"><i className="fab fa-telegram-plane"></i></a>
                    <a className="comp__footer__link" target="_blank" href="https://www.facebook.com/groups/1440256099433719/"><i className="fab fa-facebook-f"></i></a>
                    <a className="comp__footer__link" target="_blank" href="https://www.reddit.com/r/AmaZixOfficial/"><i className="fab fa-reddit-alien"></i></a>
                    <a className="comp__footer__link" target="_blank" href="http://amazix.com"><i className="fas fa-globe"></i></a>
                </div>
                </div>
            </div>
          
      </div>
    )
  }
}
