import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ searchResult: '' });
  }

  handleChange(event) {
    this.setState({ searchResult: event.target.value });
  }

  render() {
    const { searchResult } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={searchResult} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Search;
