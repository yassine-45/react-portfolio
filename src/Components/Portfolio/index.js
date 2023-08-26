import React ,{useState,useEffect} from 'react'
import {Portfolios,Portfoliotitle,Span,Portfoliolist,Portfolioitem,Box,Img,Overlay,Spane} from './style.js'
import axios from 'axios'
const Portfolio =() => {

  const [images , setimages] = useState([])

  useEffect( () => {
    axios.get('js/data.json').then( res => {setimages(res.data.portfolio)})
  }, [])
  
  const Portfolioimages =images.map((imageItem)=>{
    return(
      <Box key={imageItem.id}>
         <Img src={imageItem.image} alt=""/>
          <Overlay>
            <Spane>
              Show Image
            </Spane>
         </Overlay>
     </Box>


    )
  })

  return (
    <Portfolios>
    <Portfoliotitle><Span>My</Span> Portfolio</Portfoliotitle>
    <Portfoliolist>
                <Portfolioitem active>All</Portfolioitem>
                <Portfolioitem>HTML</Portfolioitem>
                <Portfolioitem>Photoshop</Portfolioitem>
                <Portfolioitem>Wordpress</Portfolioitem>
                <Portfolioitem>Mobile</Portfolioitem>
            </Portfoliolist>
    <div class="box">
        
    {Portfolioimages}
        
    </div>
    
</Portfolios>

 
  )


}

export default Portfolio;