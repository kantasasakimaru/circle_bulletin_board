import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';


const IconDistance = styled.div`
    margin-left: 10px;
`;

class FacebookIcon extends Component {

    render() {
        return (
            <IconDistance>
                <SocialIcon color="#FFFFFF" rel="noreferrer noopener" target="_blank" url="https://www.facebook.com/profile.php?id=100034645643304" />
            </IconDistance>
        );
    }
}

export default FacebookIcon;
