import React from 'react';
import { TotalReviewsAndSearch, SearchBar, TotalReviews, RatingsBox1, Rating, RatingsBox2, RatingNameAndStars, RatingBar, BackToReviewsStyle, SearchMessageStyle, SearchMessageContainerStyle } from '../componentsStyles/RatingBarStyles.jsx';
import Search from './Search.jsx';
import StarRating from './StarRating.jsx';

class ReviewBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ratings, search, handleSearch, searchWord, backToReviews, allSearchReviews, searchWordNotFound } = this.props;
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
    if (searchWordNotFound) {
      return (
        <RatingBar>
          <div>
            <TotalReviewsAndSearch>
              <TotalReviews>
                {`${ratings.length} Reviews`}
                <StarRating rating={total / Object.keys(totalRatings).length / ratings.length} />
              </TotalReviews>
              <SearchBar>
                <Search ratings={ratings} handleSearch={handleSearch} />
              </SearchBar>
            </TotalReviewsAndSearch>
          </div>
          <SearchMessageContainerStyle>
            <SearchMessageStyle>
              {`None of our guests have mentioned "${searchWord}"`}
            </SearchMessageStyle>
            <BackToReviewsStyle type="button" onClick={backToReviews}>
              Back to all reviews
            </BackToReviewsStyle>
          </SearchMessageContainerStyle>
        </RatingBar>
      );
    }
    if (search) {
      return (
        <RatingBar>
          <div>
            <TotalReviewsAndSearch>
              <TotalReviews>
                {`${ratings.length} Reviews`}
                <StarRating rating={total / Object.keys(totalRatings).length / ratings.length} />
              </TotalReviews>
              <SearchBar>
                <Search ratings={ratings} handleSearch={handleSearch} />
              </SearchBar>
            </TotalReviewsAndSearch>
          </div>
          <SearchMessageContainerStyle>
            <SearchMessageStyle>
              {`${allSearchReviews} guests have mentioned "${searchWord}"`}
            </SearchMessageStyle>
            <BackToReviewsStyle type="button" onClick={backToReviews}>
              Back to all reviews
            </BackToReviewsStyle>
          </SearchMessageContainerStyle>
        </RatingBar>
      );
    }
    return (
      <RatingBar>
        <div>
          <TotalReviewsAndSearch>
            <TotalReviews>
              {`${ratings.length} Reviews`}
              <StarRating rating={total / Object.keys(totalRatings).length / ratings.length} />
            </TotalReviews>
            <SearchBar>
              <Search ratings={ratings} handleSearch={handleSearch} />
            </SearchBar>
          </TotalReviewsAndSearch>
        </div>
        <RatingsBox1>
          <Rating>
            <RatingNameAndStars>
              Accuracy
            </RatingNameAndStars>
            <RatingNameAndStars>
              <StarRating rating={totalRatings.accuracy / ratings.length} />
            </RatingNameAndStars>
          </Rating>
          <Rating>
            <RatingNameAndStars>
              Communication
            </RatingNameAndStars>
            <RatingNameAndStars>
              <StarRating rating={totalRatings.communication / ratings.length} />
            </RatingNameAndStars>
          </Rating>
          <Rating>
            <RatingNameAndStars>
              Cleanliness
            </RatingNameAndStars>
            <RatingNameAndStars>
              <StarRating rating={totalRatings.cleanliness / ratings.length} />
            </RatingNameAndStars>
          </Rating>
        </RatingsBox1>

        <RatingsBox2>
          <Rating>
            <RatingNameAndStars>
              Location
            </RatingNameAndStars>
            <RatingNameAndStars>
              <StarRating rating={totalRatings.location / ratings.length} />
            </RatingNameAndStars>
          </Rating>
          <Rating>
            <RatingNameAndStars>
              Check-in
            </RatingNameAndStars>
            <RatingNameAndStars>
              <StarRating rating={totalRatings.check_in / ratings.length} />
            </RatingNameAndStars>
          </Rating>
          <Rating>
            <RatingNameAndStars>
              Value
            </RatingNameAndStars>
            <RatingNameAndStars>
              <StarRating rating={totalRatings.value / ratings.length} />
            </RatingNameAndStars>
          </Rating>
        </RatingsBox2>
      </RatingBar>
    );
  }
}
// ReviewBar.propTypes = {
//   ratings: propTypes.array,
//   search: propTypes.boolean,
// }
//   // handleSearch,
//   // searchWord,
//   // backToReviews,
//   // allSearchReviews };
//   // Person.propTypes = {
//   //   firstName:PropTypes.string,
//   //   lastName:PropTypes.string,
//   //   country:PropTypes.string
//   // };
export default ReviewBar;
