import styled from 'styled-components'
export const Homee =styled.div `
    height: 620px;
    background: url('../images/Home/home-bg.jpg');
    background-size: cover;
    margin: -9px;
    background-position: center;
    text-align: center;
    position: initial;
    `
export const  Description=styled.div `
    padding: 60px;
    width: 66%;
    margin-left: auto;
    margin-right: auto;
`

export const Homeinformation =styled.div `
    position: absolute;
    display: contents;
    top: 100%;
    left: 50%;
    transform: translate(-50%,-50%)
    `
export const Hometitle =styled.h2 `
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    margin-top: 100px;
    `

export const Homeinfo =styled.h4 `
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    `

export const Homedesc=styled.p `
    font-size: 20px;
    line-height: 1.5;
    color: #5e5e5e;
    margin-bottom: 35px
    `

export const Span =styled.span `
    color: #000
    `

export const Homebtn=styled.button `
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold
    &:hover {
        background: #fff;
        color: #eb5424
    }
    `

