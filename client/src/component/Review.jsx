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
      UserProfilePicture,
      Username,
      Time,
      ReviewContainer,
      ReadMore,
      TimeUsernameProfilePicContainer,
      TimeAndUsernameContainer,
      Message,
    } = styles;
    
    const { reviewsHaveBeenClicked } = this.state;
    const { review } = this.props;
    const {
<<<<<<< HEAD
<<<<<<< HEAD
      profile_pic_url, 
      username,
      time_made,
      message,
      reviewClicked,
=======
       profile_pic_url, username, time_made, message 
>>>>>>> Added my bundle.js to my git ignore
=======
      profile_pic_url, username, time_made, message 
>>>>>>> conflicts
    } = review;
    const testMessage = message.slice(0, 600);
    console.log(testMessage);
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
          <Message>{message}</Message>
        </ReviewContainer>
      );
    } if (message.length > 600) {
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
            {testMessage}
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
        <Message>{testMessage}</Message>
      </ReviewContainer>
    );
  }
}
export default Review;
