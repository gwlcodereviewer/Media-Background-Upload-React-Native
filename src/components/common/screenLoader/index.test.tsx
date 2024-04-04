import React from 'react';
import renderer from 'react-test-renderer';
import ScreenLoader from '.';

let wrapper: renderer.ReactTestRenderer;

describe('render correctly', () => {
  wrapper = renderer.create(<ScreenLoader />);

  it('render correctly screenLoader view', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
