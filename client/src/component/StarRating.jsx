import React from 'react';
import StarRatings from 'react-star-ratings';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rating } = this.props;
    if (isNaN(rating)) {
      return (<div>not a number</div>);
    }
    return (
      <StarRatings
        rating={rating}
        starRatedColor="#008489"
        starDimension="20px"
        starSpacing="2px"
      />
    );
  }
}
export default StarRating;
