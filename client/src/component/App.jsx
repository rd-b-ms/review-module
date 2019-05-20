import React from 'react';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
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
      .then((response) => {
        console.log(response.data[1].message);
        console.log(response.data[1].message.length);
        this.setState({ currentReviews: response.data });
      });
  }

  render() {
    const { currentReviews } = this.state;
    return (
      <div>
        <ReviewBar ratings={currentReviews} />
        <ReviewList reviews={currentReviews} />
      </div>
    );
  }
}

export default App;
