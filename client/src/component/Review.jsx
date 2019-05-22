import React from 'react';
import styled from 'styled-components';

const UserProfilePicture = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;
const Username = styled.div`
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  line-height: 1.375em;
  color: #484848;
`;
const Message = styled.div`
  color: #484848;
  margin-top: 16px;
`;
const TimeAndUsernameContainer = styled.div`
  margin-left: 16px;
`;
const TimeUsernameProfilePicContainer = styled.div`
display: inline-flex;
width: 100%;
border-spacing: 0px;
`;
const Time = styled.span`
margin: 0px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 1.2857142857142858em;
color: #484848;
`;
const ReviewContainer = styled.div`
  margin-bottom: 35px;
  max-width: 696px;
  margin-left: 70px;
`;
const ReadMore = styled.p`
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
    review.reviewClicked = true;
    this.setState({ reviewsHaveBeenClicked: true });
  }

  render() {
    const { reviewsHaveBeenClicked } = this.state;
    const { review } = this.props;
    const {
      profile_pic_url, username, time_made, firstHalfOfMessage, secondHalfOfMessage, reviewClicked,
    } = review;
    if (reviewsHaveBeenClicked && reviewClicked) {
      return (
        <ReviewContainer>
          <div>
            <TimeUsernameProfilePicContainer>
              <UserProfilePicture src={profile_pic_url} alt="" />
              <TimeAndUsernameContainer>
                <div>
                  <Username>{username}</Username>
                  <Time>{time_made}</Time>
                </div>
              </TimeAndUsernameContainer>
            </TimeUsernameProfilePicContainer>
          </div>
          <Message>{firstHalfOfMessage + secondHalfOfMessage}</Message>
        </ReviewContainer>
      );
    } if (secondHalfOfMessage.length > 0) {
      return (
        <ReviewContainer>
          <div>
            <TimeUsernameProfilePicContainer>
              <UserProfilePicture src={profile_pic_url} alt="" />
              <TimeAndUsernameContainer>
                <div>
                  <Username>{username}</Username>
                  <Time>{time_made}</Time>
                </div>
              </TimeAndUsernameContainer>
            </TimeUsernameProfilePicContainer>
          </div>
          <Message>
            {firstHalfOfMessage}
            <ReadMore onClick={event => this.handleClick(event, review)}>...Read More</ReadMore>
          </Message>
        </ReviewContainer>
      );
    }
    return (
      <ReviewContainer>
        <div>
          <TimeUsernameProfilePicContainer>
            <UserProfilePicture src={profile_pic_url} alt="" />
            <TimeAndUsernameContainer>
              <div>
                <Username>{username}</Username>
                <Time>{time_made}</Time>
              </div>
            </TimeAndUsernameContainer>
          </TimeUsernameProfilePicContainer>
        </div>
        <Message>{firstHalfOfMessage}</Message>
      </ReviewContainer>
    );
  }
}
export default Review;
