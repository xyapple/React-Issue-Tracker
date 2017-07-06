import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';
//Google API Key
const API_KEY = 'AIzaSyB8Sokjv4f6Bfvuo2UTTk33JuV9XcV_5LE';

const App =()=>{
    return (
        <div>

            <SearchBar />
        </div>

    )
}

ReactDOM.render(<App />, document.querySelector('.container'));
