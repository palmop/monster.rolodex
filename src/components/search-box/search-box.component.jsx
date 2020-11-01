import React from 'react';

import './search-box.style.css';

export const SearchBox = ({placeholder, handlerChange}) => (
    <input 
            className='search' 
            type='search'  
            placeholder={placeholder} 
            onChange={handlerChange} />
)

// N.B. usiamo className e non class perché si tratta di un React.HTMLAttrubutes (importiamo infatti lo stile.)