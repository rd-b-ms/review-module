import React from 'react';
import { SearchForm, SearchFormContainer, InputStyle } from '../componentsStyles/SearchStyle.jsx';

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
    const { searchResult } = this.state;
    const { handleSearch } = this.props;
    handleSearch(searchResult);
    this.setState({ searchResult: '' });
  }

  handleChange(event) {
    this.setState({ searchResult: event.target.value });
  }

  render() {
    const { searchResult } = this.state;
    const { ratings } = this.props;
    const maginfineGlass = (
      <svg
        viewBox="0 0 24 24"
        role="presentation"
        aria-hidden="true"
        focusable="false"
        style={{
          height: '13px',
          width: '13px',
          fill: 'rgb(72, 72, 72)',
          marginLeft: '5px',
          display: 'table-cell',
          float: 'left',
          paddingTop: '10px',
        }}
      >
        <path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" fillRule="evenodd" />
      </svg>
    );

    return (
      <SearchFormContainer>
        {maginfineGlass}
        <SearchForm onSubmit={this.handleSubmit}>
          <InputStyle type="text" value={searchResult} onChange={this.handleChange} placeholder="Search reviews" />
        </SearchForm>
      </SearchFormContainer>
    );
  }
}

export default Search;
