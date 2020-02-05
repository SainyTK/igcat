import React from 'react';
import Icon from './Icon';

import './Input.css';

const Input = props => {
    return (
        <div className='input-container'>
            <Icon type='search' size="12" color='#999' style={{ marginRight: 8 }} />
            <div>ค้นหา</div>
        </div>
    )
}

export default Input;