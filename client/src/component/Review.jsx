import React from 'react';
import styles from '../componentsStyles/ReviewStyle.jsx';


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
    const {
      UserProfilePicture, Username, Time, ReviewContainer, ReadMore, TimeUsernameProfilePicContainer, TimeAndUsernameContainer, Message } = styles;
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
