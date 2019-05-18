/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReviews: '',
    };
  }

  componentDidMount() {
    axios.get('/messages')
      .then((responce) => {
        this.setState({ currentReviews: responce.data });
      });
  }

  render() {
    return (<div> Hello World </div>);
  }
}

export default App;
