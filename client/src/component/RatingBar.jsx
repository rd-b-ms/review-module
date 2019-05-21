import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';

const StyledTotalReviewsAndSearch = styled.h2`
  display: inline-flex;
`;
const StyledSearchBar = styled.div`
  margin-left: 10px;
  padding-left: 8px;
`;
const StyledTotalReviews = styled.div`
display: table;
position: relative;
height: 100%;
width: 100%;
padding-right: 8px;
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
class ReviewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ratings } = this.props;
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
    return (
      <div>
        <div>
          <StyledTotalReviewsAndSearch>
            <StyledTotalReviews>
              {`${ratings.length} Reviews`}
            </StyledTotalReviews>
            <StyledSearchBar>
              <Search />
            </StyledSearchBar>
          </StyledTotalReviewsAndSearch>
        </div>
        <StyledRatingsBox1>
          <StyledRating>
            Accuracy
            {` ${Math.floor((totalRatings.accuracy / ratings.length))}`}
          </StyledRating>
          <StyledRating>
            Communication
            {` ${Math.floor((totalRatings.communication / ratings.length))}`}
          </StyledRating>
          <StyledRating>
            Cleanliness
            {` ${Math.floor((totalRatings.cleanliness / ratings.length))}`}
          </StyledRating>
        </StyledRatingsBox1>
        <StyledRatingsBox2>
          <StyledRating>
            Location
            {` ${Math.floor((totalRatings.location / ratings.length))}`}
          </StyledRating>
          <StyledRating>
            Check-in
            {` ${Math.floor((totalRatings.check_in / ratings.length))}`}
          </StyledRating>
          <StyledRating>
            Value
            {` ${Math.floor((totalRatings.value / ratings.length))}`}
          </StyledRating>
        </StyledRatingsBox2>
      </div>
    );
  }
}
export default ReviewBar;
