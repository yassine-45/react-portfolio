import React from 'react'
import {Homee,Homeinformation,Homeinfo,Hometitle,Homedesc,Homebtn,Span,Description} from './style.js'

const Home =() => {
  

  return (
  <Homee>
    <div className="container">
      <Description>
        <Homeinformation>
            <Hometitle>Hadj Mohamed Yassine</Hometitle>
            <Homeinfo>Creative Director</Homeinfo>
            <Homedesc>
                Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
            </Homedesc>
            <Homebtn>Let's Begin</Homebtn>
        </Homeinformation>
        </Description>
    </div>
  </Homee>

 
  )


}

export default Home;