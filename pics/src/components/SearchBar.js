import React from 'react'

class SearchBar extends React.Component {
    state = {
        term:'',
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            name="SearchBar" 
                            id="SearchBar" 
                            onSubmit={this.onFormSubmit}
                            onChange={e => this.setState({ term: e.target.value})}
                            value={this.state.term} 
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar