/* eslint-disable react/no-unused-state */
import React from 'react';
import axios from 'axios';
import MapReviews from './mapReviews.jsx';
import ReviewBar from './RatingBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReviews: [],
    };
  }

  componentDidMount() {
    axios.get('/messages')
      .then((responce) => {
        this.setState({ currentReviews: responce.data });
      });
  }

  render() {
    const { currentReviews } = this.state;
    console.log(currentReviews);
    return (
      <div>
        <ReviewBar ratings={currentReviews} />
        <MapReviews reviews={currentReviews} />
      </div>
    );
  }
}

export default App;
