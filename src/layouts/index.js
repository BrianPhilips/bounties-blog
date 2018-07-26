import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import './all.sass'
import './custom.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet 
      title="Amazix Rewards | Blog" 
      meta={[
          { name: 'description', content: 'Amazix Rewards - Crypto Bounties Lottereis and Contests' },
          { name: 'keywords', content: 'Bounties, Crypto, Cotnests, Lotteries, Rewards' },
        ]}
      />
    <Navbar />
    <div className="content-wrapper">{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
