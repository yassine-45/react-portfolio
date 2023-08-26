import React from 'react'

import {Navbarsection,Logo,List,Listitem,Lienat, Logotext,LinkItem} from './style.js'

const Navbar =() => {
  

  return (

        <Navbarsection>
            
            <div className="container">
                
                <Logo>
                    <Logotext>PortFolio</Logotext>
                </Logo>

                <List>
                    <Listitem ><LinkItem to="/">Home</LinkItem></Listitem>
                    <Listitem><Lienat>Work</Lienat></Listitem>
                    <Listitem><Lienat>Portfolio</Lienat></Listitem>
                    <Listitem><Lienat>Resume</Lienat></Listitem>
                    <Listitem><Lienat>About</Lienat></Listitem>
                    <Listitem><LinkItem to="/Contact">Contact</LinkItem></Listitem>
                </List>
                
            </div>
            
        </Navbarsection>
 
  )


}

export default Navbar;