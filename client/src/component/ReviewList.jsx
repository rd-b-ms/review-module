import React from 'react';
import Review from './Review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reviews } = this.props;
    return (
      <div>
        {reviews.map((review) => {
          // This will split the message in two
          review.reviewClicked = false;
          return (<Review review={review} key={review.message_id} />);
        })}
      </div>
    );
  }
}
export default ReviewList;
