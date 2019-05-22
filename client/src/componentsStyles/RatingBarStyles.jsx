import styled from 'styled-components';

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
const styles = {
  StyledTotalReviewsAndSearch,
  StyledSearchBar,
  StyledTotalReviews,
  StyledRatingsBox1,
  StyledRating,
  StyledRatingsBox2,
  StyledRatingNameAndStars,
};
export default styles;
