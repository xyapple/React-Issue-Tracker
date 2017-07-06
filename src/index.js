import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//load the libary
import YTSearch from 'youtube-api-search';
//load the componet
import SearchBar from './components/searchBar';

//Google API Key
const API_KEY = 'AIzaSyB8Sokjv4f6Bfvuo2UTTk33JuV9XcV_5LE';

YTSearch({key: API_KEY, term:'kayak'}, function(data){
    console.log(data);
})

class App extends Component {
    constructor(props){
        super(props);

        this.state={videos: []};
    }
    render(){
        return (
            <div>
                    <SearchBar />
            </div>

        );
    }
}



ReactDOM.render(<App/>, document.querySelector('.container'));
