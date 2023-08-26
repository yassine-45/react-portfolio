import React, { Component } from 'react'
import {Worksection,Worktitle,Part,Parttitle,Line,Partdesc,Span,Icon} from './style.js'
import axios from 'axios'
class Work extends Component {
  state ={
    works :[]
  }
  componentDidMount (){
    axios.get('js/data.json').then(res =>{this.setState({works:res.data.works})})
  }
render(){
  const {works} =this.state
  const workslist = works.map((worksitem)=>{
    return(
      <Part first ={worksitem.id} key={worksitem.id}>
      <Icon className={worksitem.icon_name}></Icon >
      <Parttitle>{worksitem.title}</Parttitle>
      <Line/>
      <Partdesc>
      {worksitem.body}
      </Partdesc>
  </Part>

    )
   

  })
  return (
    <Worksection>
    <div classname="container">
        <Worktitle><Span>My</Span> Work</Worktitle>
        {workslist}
    </div>
</Worksection>


 
  )


}
}
export default Work;