import React from 'react';
import renderer from 'react-test-renderer';
import AppStatusBar from '.';

let wrapper: renderer.ReactTestRenderer;

describe('render correctly', () => {
  wrapper = renderer.create(<AppStatusBar />);

  it('render correctly appStatusBar view', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
