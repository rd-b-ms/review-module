import React from 'react';
import styled from 'styled-components';

const UserProfilePicture = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;
const UsernameStyle = styled.p`
  font-weight: 600;
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 16px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  line-height: 1.375em;
  color: #484848;
`;
const MessageStyle = styled.div`
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
const TimeStyle = styled.div`
margin: 0px;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 1.2857142857142858em;
color: #484848;
`;
const ReviewContainer = styled.div`
  margin-bottom: 35px;
`;
class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { review } = this.props;
    const {
      profile_pic_url, username, time_made, message 
    } = review;
    return (
      <ReviewContainer>
        <div>
          <TimeUsernameProfilePicContainer>
            <UserProfilePicture src={profile_pic_url} alt="" />
            <TimeAndUsernameContainer>
              <div>
                <UsernameStyle>{username}</UsernameStyle>
                <TimeStyle>{time_made}</TimeStyle>
              </div>
            </TimeAndUsernameContainer>
          </TimeUsernameProfilePicContainer>
        </div>
        <MessageStyle>{message}</MessageStyle>
      </ReviewContainer>
    );
  }
}
export default Review;
