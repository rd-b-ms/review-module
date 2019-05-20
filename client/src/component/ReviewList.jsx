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
          const splitMessage = review.message.split('');
          const firstHalfOfMessage = splitMessage.slice(0, 600);
          const secondHalfOfMessage = splitMessage.slice(600, splitMessage.length);
          review.firstHalfOfMessage = firstHalfOfMessage.join('');
          review.secondHalfOfMessage = secondHalfOfMessage.join('');
          review.readMoreClicked = false;
          return (<Review review={review} key={review.message_id} />);
        })}
      </div>
    );
  }
}
export default ReviewList;
