import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//load the libary
import YTSearch from 'youtube-api-search';
//load the componet
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
//Google API Key
const API_KEY = 'AIzaSyB8Sokjv4f6Bfvuo2UTTk33JuV9XcV_5LE';


class App extends Component {
    constructor(props){
        super(props);

        this.state={videos: []};

        YTSearch({key: API_KEY, term:'kayak'}, (videos)=>{
            this.setState({videos})
            //this.setState({videos:videos})
        })

    }
    render(){
        return (
            <div>
                    <SearchBar />
                    <VideoList videos={this.state.videos}/>
            </div>

        );
    }
}



ReactDOM.render(<App/>, document.querySelector('.container'));
