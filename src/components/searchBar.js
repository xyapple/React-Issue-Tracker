import React, {Component} from 'react';

/*const SearchBar =()=>{
    return <input />
}*/

class SearchBar extends Component {
    //inisial state in the class
    constructor(props) {
        //like the parent method
        super(props);

        //this is the state; always has a new object
        this.state = {
            term: ''
        };
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    render() {
        return (
            <div className="search-bar">
                {/*<h1>Please enter something</h1>*/}
                <input
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
                {/*<h5>Value of the Input: {this.state.term}</h5>*/}
            </div>

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
