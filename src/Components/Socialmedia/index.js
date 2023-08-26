import React ,{useState,useEffect}from 'react'
import {Socialmediaa,Social,Icon,Socialdesc,Span,Spaninfo} from './style.js'
import axios from 'axios'

const Socialmedia =() => {
  const [socialitem,setsocial]=useState([])
  useEffect(()=>{
    axios.get('js/data.json').then( res => {setsocial(res.data.social)})
  },[])
  const socialitems=socialitem.map((socialmap)=>{return(
    
    <Social item={socialmap.id} key={socialmap.id}>
    <Icon className={socialmap.icon}></Icon>
    <Socialdesc>
        <Span>{socialmap.title}</Span>
        <Spaninfo>{socialmap.body}</Spaninfo>
    </Socialdesc>
   </Social>


  )})

  return (
        <Socialmediaa>
            {socialitems}
        </Socialmediaa>
        

 
  )


}

export default Socialmedia;