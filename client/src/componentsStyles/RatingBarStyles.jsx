import styled from 'styled-components';

const TotalReviewsAndSearch = styled.h2`
display: inline-flex;
`;
const SearchBar = styled.div`
padding-left: 226px;
float: right;
`;
const TotalReviews = styled.div`
font-size: 24px;
font-weight: 800;
line-height: 1.25em;
color: #484848;
padding-top: 2px;
padding-bottom: 2px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
`;
const RatingsBox1 = styled.div`
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
const Rating = styled.div`
margin: 0px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 1.375em;
color: #484848;
display: -webkit-box;
`;
const RatingsBox2 = styled.div`
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
const RatingNameAndStars = styled.div`
padding-left: 8px;
padding-right: 8px;
min-height: 1px;
position: relative;
width: 50%;
`;
const RatingBar = styled.div`
  margin-left: 78px;
  border-bottom: solid #ebebeb;
  border-width: thin;
  max-width: 696px;
`;
const BackToReviewsStyle = styled.button`
  color: var(--color-text-link, #008489);
  backGround: transparent;
  width: 33.3333%;
  float: left;
  outline: none;
  border: none;
  font-size: 14px;
`;
const SearchMessageStyle = styled.div`
  width: 400px;
  float: left;
`;
const SearchMessageContainerStyle = styled.div`
  margin-bottom: 56px;
`;
export {
  TotalReviewsAndSearch,
  SearchBar,
  TotalReviews,
  RatingsBox1,
  Rating,
  RatingsBox2,
  RatingNameAndStars,
  RatingBar,
  BackToReviewsStyle,
  SearchMessageStyle,
  SearchMessageContainerStyle,
};
