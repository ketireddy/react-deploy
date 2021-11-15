import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Product } from './Products/MyProducta'
import DBImage from '../images/D&B.jpeg';

import { userService } from '../_services';
import './HomePage.css';

const Footer = styled.div`
        margin-left: 4em;
`

const Header = styled.div`
        height: 48px;
        width: 100%;
        padding: 8px;
        display: flex;
`
const BodySection = styled.div`
 
`
const WelcomeBanner = styled.div`
        height: 48px;
        width: 100%;
        padding: 8px;
        display: flex;
        background: #4983d9; 
        padding-left: 7em;
        padding-top: 14px;
        color: #ffffff;
`

const UserIcon = styled.div`
        display: flex;
        margin-right: 2em;
        padding-top: 0.5em;
        position: absolute;
        right: 0;
`

const AppIcon = styled.img`
        display: flex;
        margin-left: 6.5em;
        padding-top: 0.5em;
        height: 30px;
        width: 30px;
`

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    componentDidMount() {
        this.setState({ 
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user, users } = this.state;
        return (
        <>
          <Header>
                <AppIcon src={DBImage} />
                <UserIcon>
                    <a><svg class="Icons__StyledGlobalIcon-bEnuem cxqDSs" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" height="16" width="16"><path  d="M17.54 14A3.77 3.77 0 0 1 20 17.5v2.08a.42.42 0 0 1-.42.42H.42a.42.42 0 0 1-.42-.42V17.5A3.77 3.77 0 0 1 2.43 14l4.45-1.34a4.34 4.34 0 0 1-1.45-2.72 1.59 1.59 0 0 1-1-1.6 2.11 2.11 0 0 1 .13-.72l-.43-3C4.08.71 7.82 0 10 0s5.92.69 5.83 4.63l-.44 3a2.12 2.12 0 0 1 .13.72 1.59 1.59 0 0 1-1 1.6 4.33 4.33 0 0 1-1.44 2.7zM10 13.33c1.12 0 3.75-1.58 3.75-3.75a.42.42 0 0 1 .42-.42c.41 0 .52-.55.52-.83s-.11-.83-.52-.83a.42.42 0 0 1-.41-.33l-.35-1.75c-2.19-.06-3-.68-3.41-1.33-.45.65-1.22 1.27-3.41 1.33l-.35 1.75a.42.42 0 0 1-.41.33c-.41 0-.52.55-.52.83s.11.83.52.83a.42.42 0 0 1 .42.42c0 2.17 2.63 3.75 3.75 3.75z"></path></svg>
                    </a>
                </UserIcon>
          </Header>
          <BodySection>
              <WelcomeBanner>Welcome, Dnb!</WelcomeBanner>
              <Product></Product>
          </BodySection>  
        </>
        );
    }
}

export { HomePage };