import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import RatingBar from '../client/src/component/RatingBar.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('review test', () => {
  test('should render with no error', () => {
    expect(shallow(<RatingBar ratings={{
      accuracy_rating: 2,
      check_in_rating: 2,
      cleanliness_rating: 4,
      communication_rating: 2,
      listing_id: 50,
      location_rating: 3,
      message: 's',
      message_id: 820,
      profile_pic_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/_dwite_/128.jpg',
      reviewClicked: false,
      time_made: 'June 2018',
      username: 'Danika Purdy',
      value_rating: 1,
    }}
    />).exists()).toBe(true);
  });
});
