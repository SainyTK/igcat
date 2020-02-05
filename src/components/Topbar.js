import React from 'react';
import Icon from './Icon';

import './Topbar.css';
import logo from '../images/ig-logo.png';
import Input from './Input';

const Topbar = props => {
    return (
        <div className='topbar-container'>
            <div className='topbar-left'>
                <Icon type='camera' style={{ marginRight: 10 }} />
                <div className='v-divider' />
                <img className='topbar-logo' src={logo} />
            </div>
            <div className='topbar-center'>
                <Input/>
            </div>
            <div className='topbar-right'>
                <Icon style={{ marginLeft: 20 }} type='compass' />
                <Icon style={{ marginLeft: 20 }} type='heart' />
                <Icon style={{ marginLeft: 20 }} type='person' />
            </div>
        </div>
    )
}

export default Topbar;