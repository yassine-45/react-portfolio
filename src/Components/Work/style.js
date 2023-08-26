import styled from 'styled-components'
export const Worksection =styled.div`
    height: auto;
    padding: 10px 0;
    overflow: hidden;
    background: #fff
    `

export const Worktitle  =styled.h2`
    font-size: 60px; 
    margin-left: 40px;
    `

export const Span =styled.span`
    font-weight: normal
    `

export const Part =styled.div`
    margin-top: 10px;
    width: 25%;
    float: left;
    height: auto;
    padding: 80px 0;
    border-radius: 20px;
    box-shadow:inset 0 -3em 3em rgba(0, 0, 0, 0.1),0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    text-align: center;
    margin-left:5px;
    margin-left:${props =>props.first === "1" ? '0' : '6%'}
    `

export const Icon =styled.i`
    color: #888;
    margin-bottom: 20px
    `

export const Parttitle =styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
    `

export const Line  =styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
    `
   

export const Partdesc  =styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px
    `