import React from 'react';
import Icon from './Icon';

import './Search.css';

const Search = props => {
    return (
        <div className='search-container'>
            <Icon type='search' size="12" color='#999' style={{ marginRight: 8 }} />
            <input type='text' placeholder='ค้นหา'/>
        </div>
    )
}

export default Search;