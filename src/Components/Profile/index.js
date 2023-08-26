import React,{useState,useEffect} from 'react'
import {Profileskills,Profilee,Profileitem,Profiletitle,Profilelist,Span,Spane,Web,Skills,Skillstitle,Spanee,Skillsdesc,Bar,Title,Perc,Parent,Sp1,Sp2,Sp3} from './style.js'
import axios from 'axios'

const Profile =() => {
  const [item,setitem]=useState([])
  useEffect(()=>{
  axios.get('js/data.json').then( res=>{setitem(res.data.aboutme)})},[])
  const Aboutme=item.map((items=>{
    return(
      <><Profileitem>
        <Spane>Name : </Spane>
        {items.name}
      </Profileitem>
      <Profileitem>
          <Spane>Birthday : </Spane>
          {items.birthday}
        </Profileitem>
        <Profileitem>
          <Spane>Address : </Spane>
          {items.address}
        </Profileitem>
        <Profileitem>
          <Spane>Phone : </Spane>
          {items.phone}
        </Profileitem>
        <Profileitem>
          <Spane>Email : </Spane>
          {items.email}
        </Profileitem>
        <Profileitem>
          <Spane>Website : </Spane>
          <Web>{items.Website}</Web>
        </Profileitem></>


      
    )
  }))

  return (
    <Profileskills>
            <div className="container">
                <Profilee>
                    <Profiletitle><Span>My Profile</Span></Profiletitle>
                    <Profilelist>
                    {Aboutme}
                    </Profilelist>
                </Profilee>
                
                <Skills>
                    <Skillstitle>Some <Spanee>skills</Spanee></Skillstitle>
                    <Skillsdesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skillsdesc>
                    <Bar>
                        <Title>Bootstrap</Title>
                        <Perc>100%</Perc>
                        <Parent>
                            <Sp1></Sp1>
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <Title>CSS3</Title>
                        <Perc>90%</Perc>
                        <Parent>
                            <Sp2></Sp2>
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <Title>Reactjs</Title>
                        <Perc>80%</Perc>
                        <Parent>
                            <Sp3></Sp3>
                        </Parent>
                    </Bar>
                </Skills>
                
            </div>
        </Profileskills>

 
  );


}

export default Profile