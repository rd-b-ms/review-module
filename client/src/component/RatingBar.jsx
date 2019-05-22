import React from 'react';
import styles from '../componentsStyles/RatingBarStyles.jsx';
import Search from './Search.jsx';
import StarRating from './StarRating.jsx';

class ReviewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      StyledTotalReviewsAndSearch,
      StyledSearchBar,
      StyledTotalReviews,
      StyledRatingsBox1,
      StyledRating,
      StyledRatingsBox2,
      StyledRatingNameAndStars,
    } = styles;
    const { ratings } = this.props;
    let total = 0;
    const totalRatings = {
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0,
      check_in: 0,
      value: 0,
    };
    for (let i = 0; i < ratings.length; i += 1) {
      totalRatings.accuracy += ratings[i].accuracy_rating;
      totalRatings.communication += ratings[i].communication_rating;
      totalRatings.cleanliness += ratings[i].cleanliness_rating;
      totalRatings.location += ratings[i].location_rating;
      totalRatings.check_in += ratings[i].check_in_rating;
      totalRatings.value += ratings[i].value_rating;
    }
    for (let i = 0; i < Object.values(totalRatings).length; i += 1) {
      total += Object.values(totalRatings)[i];
    }
    return (
      <div>
        <div>
          <StyledTotalReviewsAndSearch>
            <StyledTotalReviews>
              {`${ratings.length} Reviews`}
              <StarRating rating={total / Object.keys(totalRatings).length / ratings.length} />
            </StyledTotalReviews>
            <StyledSearchBar>
              <Search ratings={ratings} />
            </StyledSearchBar>
          </StyledTotalReviewsAndSearch>
        </div>
        <StyledRatingsBox1>
          <StyledRating>
            <StyledRatingNameAndStars>
              Accuracy
            </StyledRatingNameAndStars>
            <StyledRatingNameAndStars>
              <StarRating rating={totalRatings.accuracy / ratings.length} />
            </StyledRatingNameAndStars>
          </StyledRating>
          <StyledRating>
            <StyledRatingNameAndStars>
              Communication
            </StyledRatingNameAndStars>
            <StyledRatingNameAndStars>
              <StarRating rating={totalRatings.communication / ratings.length} />
            </StyledRatingNameAndStars>
          </StyledRating>
          <StyledRating>
            <StyledRatingNameAndStars>
              Cleanliness
            </StyledRatingNameAndStars>
            <StyledRatingNameAndStars>
              <StarRating rating={totalRatings.cleanliness / ratings.length} />
            </StyledRatingNameAndStars>
          </StyledRating>
        </StyledRatingsBox1>

        <StyledRatingsBox2>
          <StyledRating>
            <StyledRatingNameAndStars>
              Location
            </StyledRatingNameAndStars>
            <StyledRatingNameAndStars>
              <StarRating rating={totalRatings.location / ratings.length} />
            </StyledRatingNameAndStars>
          </StyledRating>
          <StyledRating>
            <StyledRatingNameAndStars>
              Check-in
            </StyledRatingNameAndStars>
            <StyledRatingNameAndStars>
              <StarRating rating={totalRatings.check_in / ratings.length} />
            </StyledRatingNameAndStars>
          </StyledRating>
          <StyledRating>
            <StyledRatingNameAndStars>
              Value
            </StyledRatingNameAndStars>
            <StyledRatingNameAndStars>
              <StarRating rating={totalRatings.value / ratings.length} />
            </StyledRatingNameAndStars>
          </StyledRating>
        </StyledRatingsBox2>
      </div>
    );
  }
}
export default ReviewBar;
