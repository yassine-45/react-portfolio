import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Navbarsection = styled.div `
    
    top: 0;
    width: 100%;
    padding: 5px 0;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #cbc0c0;
    
    `
export const LinkItem = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover{
            color: #eb5424;
    }
`

export const Logo = styled.div `
    width: 50%;
    float: left;
    `

export const Logotext = styled.h1 `
    font-size: 30px;
    font-weight: bold
    `

export const List = styled.ul `
    width: 50%;
    float: left;
    list-style: none;
    padding: 0;
    `


export const Listitem = styled.li `
    display: inline-block;
    `

export const Lienat = styled.a `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover {
        color: #eb5424
    }
    `
