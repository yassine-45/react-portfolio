import React ,{Component} from 'react'

import Home from './../Home'
import About from '../About'
import Profile from './../Profile'
import Portfolio from './../Portfolio'
import Socialmedia from './../Socialmedia'
import Footer from './../Footer'
import Work from './../Work'

class Index extends Component {
  
render(){
  return (
    <div>
    <Home />
    <Work />
    <Portfolio />
    <Profile />
    <About />
    <Socialmedia />
    <Footer />
    </div>

 
  )
}

}

export default Index;