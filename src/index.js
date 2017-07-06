import React from 'react';
import ReactDOM from 'react-dom';

//load the libary
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';

//Google API Key
const API_KEY = 'AIzaSyB8Sokjv4f6Bfvuo2UTTk33JuV9XcV_5LE';

YTSearch({key: API_KEY, term:'kayak'}, function(data){
    console.log(data);
})

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>

    )
}

ReactDOM.render(
    <App/>, document.querySelector('.container'));
