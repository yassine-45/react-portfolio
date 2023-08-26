import styled from 'styled-components'

export const Socialmediaa = styled.div`
    height: auto;
    overflow: hidden
    `

export const Social = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background:${props => props.item === 1 ? '#3b5998' : ''};
    background:${props => props.item === 2 ? '#498cbf' : ''};
    background:${props => props.item === 3 ? '#cc2127': ''};
    `

export const Icon = styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    border-radius:15px;
    color: #888;
    float: left;
    margin-top:14px;
    margin-right: 10px;
    `
    export const Socialdesc = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;
    color: #000;
    float:left;
    `

    export const Span = styled.span`
    display: block;
    margin-bottom: 8px
    `

    export const Spaninfo = styled.span`
    font-weight: normal
    `
