import React from 'react';
import Review from './Review.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reviews, search } = this.props;
    return (
      <div>
        {reviews.map((review) => {
          review.reviewClicked = false;
          return (<Review review={review} key={review.message_id} search={search} />);
        })}
      </div>
    );
  }
}
export default ReviewList;
