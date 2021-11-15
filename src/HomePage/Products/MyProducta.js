import React from 'react';
import styled from 'styled-components';
import DBImage from '../../images/D&B.jpeg';

const  Header=  styled.div`
    height: 38px;
    width: 100%;
    padding: 8px;
    color: #ffffff;
    border-radius: 2px;
    align-items: center;
    display: flex;
    background: linear-gradient( -180deg,rgb(31,79,128) 0%,rgb(20,68,115) 100% );
`

const BodySection =  styled.div`
    height: 118px;
    width: 100%;
    padding: 8px;
    display: flex;
`

const Footer =  styled.div`
    height: 28px;
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: end;
    color: #4983d9; 
`

const ParentSection = styled.div`
    height: 200px;
    width: 15%;
    margin-left: 6.5em;
    margin-top: 6em;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgb(9 30 66 / 25%);
`
const RightArrow = styled.div`
    border: solid #4983d9; ;
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-top: 6px;
    margin-right: 1.5em;
    margin-left: 0.5em;
`
const AppIcon = styled.img`
        display: flex;
        height: 28px;
        border-radius: 17px;
        width: 28px;
        margin-right: 6px;
`

export const Product = () => {

    const emo = this;
    
    return (
        <ParentSection>
            <Header>
            <AppIcon src={DBImage} />
                D&B Rev.Up Now</Header>
            <BodySection>D&B Rev.Up Now</BodySection>
            <Footer onClick={ () => "2"}>
                <a href="https://bme-fe.zetaglobal.net/signin">Launch</a>
            <RightArrow />
            </Footer>
        </ParentSection>
    )
}