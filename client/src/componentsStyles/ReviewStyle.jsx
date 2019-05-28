
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
  padding-bottom: 10px;
  border-bottom: solid #ebebeb;
  border-width: thin;
`;
const ReadMore = styled.p`
  color: #008489;
  display: inline-flex;
  margin: 0px
`;
const styles = {
  UserProfilePicture,
  Username,
  Time,
  ReviewContainer,
  ReadMore,
  TimeUsernameProfilePicContainer,
  TimeAndUsernameContainer,
  Message,
};
export default styles;
