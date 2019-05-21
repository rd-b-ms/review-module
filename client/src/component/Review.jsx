import React from 'react';
import styled from 'styled-components';

const StyledUserProfilePicture = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;
const StyledUsername = styled.div`
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  line-height: 1.375em;
  color: #484848;
`;
const StyledMessage = styled.div`
  color: #484848;
  margin-top: 16px;
`;
const StyledTimeAndUsernameContainer = styled.div`
  margin-left: 16px;
`;
const StyledTimeUsernameProfilePicContainer = styled.div`
display: inline-flex;
width: 100%;
border-spacing: 0px;
`;
const StyledTime = styled.span`
margin: 0px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 1.2857142857142858em;
color: #484848;
`;
const StyledReviewContainer = styled.div`
  margin-bottom: 35px;
  max-width: 696px;
  margin-left: 70px;
`;
const StyledReadMore = styled.p`
  color: #008489;
  display: inline-flex;
  margin: 0px
`;
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsHaveBeenClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, review) {
    event.preventDefault();
    review.readMoreClicked = true;
    this.setState({ reviewsHaveBeenClicked: true });
  }

  render() {
    const { reviewsHaveBeenClicked } = this.state;
    const { review } = this.props;
    const {
      profile_pic_url, username, time_made, firstHalfOfMessage, secondHalfOfMessage, reviewClicked,
    } = review;
    if (reviewsHaveBeenClicked === true && reviewClicked === true) {
      return (
        <StyledReviewContainer>
          <div>
            <StyledTimeUsernameProfilePicContainer>
              <StyledUserProfilePicture src={profile_pic_url} alt="" />
              <StyledTimeAndUsernameContainer>
                <div>
                  <StyledUsername>{username}</StyledUsername>
                  <StyledTime>{time_made}</StyledTime>
                </div>
              </StyledTimeAndUsernameContainer>
            </StyledTimeUsernameProfilePicContainer>
          </div>
          <StyledMessage>{firstHalfOfMessage + secondHalfOfMessage}</StyledMessage>
        </StyledReviewContainer>
      );
    } if (secondHalfOfMessage.length > 0) {
      return (
        <StyledReviewContainer>
          <div>
            <StyledTimeUsernameProfilePicContainer>
              <StyledUserProfilePicture src={profile_pic_url} alt="" />
              <StyledTimeAndUsernameContainer>
                <div>
                  <StyledUsername>{username}</StyledUsername>
                  <StyledTime>{time_made}</StyledTime>
                </div>
              </StyledTimeAndUsernameContainer>
            </StyledTimeUsernameProfilePicContainer>
          </div>
          <StyledMessage>
            {firstHalfOfMessage}
            <StyledReadMore onClick={event => this.handleClick(event, review)}>...Read More</StyledReadMore>
          </StyledMessage>
        </StyledReviewContainer>
      );
    }
    return (
      <StyledReviewContainer>
        <div>
          <StyledTimeUsernameProfilePicContainer>
            <StyledUserProfilePicture src={profile_pic_url} alt="" />
            <StyledTimeAndUsernameContainer>
              <div>
                <StyledUsername>{username}</StyledUsername>
                <StyledTime>{time_made}</StyledTime>
              </div>
            </StyledTimeAndUsernameContainer>
          </StyledTimeUsernameProfilePicContainer>
        </div>
        <StyledMessage>{firstHalfOfMessage}</StyledMessage>
      </StyledReviewContainer>
    );
  }
}
export default Review;
