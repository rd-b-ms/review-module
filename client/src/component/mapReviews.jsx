import React from 'react';
import ReviewsEntry from './ReviewsEntry.jsx';

class MapReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const { reviews } = this.props;
    return (
      <div>
        {reviews.map(review => <ReviewsEntry review={review} key={review.message_id} />)}
      </div>
    );
  }
}
export default MapReviews;
