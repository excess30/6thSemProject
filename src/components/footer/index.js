import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';


class Footer extends React.Component {
    render() {
       return (
        <div className="footer">
            <div className="footer-contents">
            Made with&nbsp;
            <span><FontAwesomeIcon icon={faHeart} size="xs"/></span>
            &nbsp;and&nbsp;
            <span><FontAwesomeIcon icon={faCoffee} size="xs" /></span>
            </div>
        </div>
       );
    }
}

export default Footer;