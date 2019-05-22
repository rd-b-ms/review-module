import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';
import StarRating from './StarRating.jsx';

const StyledTotalReviewsAndSearch = styled.h2`
  display: inline-flex;
`;
const StyledSearchBar = styled.div`
  margin-left: 10px;
  padding-left: 8px;
`;
const StyledTotalReviews = styled.div`
font-size: 24px !important;
font-weight: 800 !important;
line-height: 1.25em !important;
color: #484848 !important;
padding-top: 2px !important;
padding-bottom: 2px !important;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
`;
const StyledRatingsBox1 = styled.div`
color: #484848;
float: left;
font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
font-size: 14px;
height: 105px;
line-height: 20.02px;
min-height: 1px;
padding-left: 8px;
padding-right: 8px;
width: 332px;
`;
const StyledRating = styled.div`
  margin: 0px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  color: #484848;
  display: -webkit-box;
`;
const StyledRatingsBox2 = styled.div`
  color: #484848;
  float: left;
  font-family: Circular,-apple-system,system-ui,Roboto,"Helvetica Neue",sans-serif;
  font-size: 14px;
  height: 105px;
  line-height: 20.02px;
  min-height: 1px;
  padding-left: 8px;
  padding-right: 8px;
  width: 332px;
`;
const StyledRatingNameAndStars = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  min-height: 1px;
  position: relative;
  width: 50%;
  // float: left;
`;
class ReviewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
