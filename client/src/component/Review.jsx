import React from 'react';

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
      <div>
        <div>
          <div>
            <div><img src={profile_pic_url} alt="" /></div>
            <div>{username}</div>
            <div>{time_made}</div>
          </div>
        </div>
        <h5>
          {message}
        </h5>
      </div>
    );
  }
}
export default Review;
