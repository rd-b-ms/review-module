import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import App from '../client/src/component/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('review test', () => {
  test('should render with no error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });
});
