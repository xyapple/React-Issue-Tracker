import React, {Component} from 'react';

/*const SearchBar =()=>{
    return <input />
}*/

class SearchBar extends Component{
    //inisial state in the class
    constructor(props){
        super(props);
        this.state={term:''}
    }
    render () {
        return(
        <input onChange={event => console.log(event.target.value)} />
    );
    }

    /* before
    render () {
        onInputChange(event){
            console.log(event.target.value);
        }
        return(
        <input onChange={this.onInputChange} />
    );
}*/
}

export default SearchBar;
