import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
//load the libary
import YTSearch from 'youtube-api-search';
//load the componet
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
//Google API Key
const API_KEY = 'AIzaSyB8Sokjv4f6Bfvuo2UTTk33JuV9XcV_5LE';


class App extends Component {
    constructor(props){
        super(props);

        this.state={
            videos: [],
            selectedVideo: null
        };

        // YTSearch({key: API_KEY, term:'kayak'}, (videos)=>{
        //     this.setState({
        //         videos:videos,
        //         selectedVideo: videos[0]
        //     })
        //     //this.setState({videos:videos})
        // });
        this.videoSearch('kayak');

    }

    videoSearch =(term) =>{
        YTSearch({key: API_KEY, term: term}, (videos)=>{
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos:videos})
        });
    }

    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300)
        return (
            <div>
                    <SearchBar onSearchTermChange={videoSearch}/>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                        videos={this.state.videos}/>
            </div>

        );
    }
}



ReactDOM.render(<App/>, document.querySelector('.container'));
