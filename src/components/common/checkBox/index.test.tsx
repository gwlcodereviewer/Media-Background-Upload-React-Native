import React from 'react';
import renderer from 'react-test-renderer';
import CheckBoxCircle from '.';

let wrapper: renderer.ReactTestRenderer;

describe('render correctly', () => {
  wrapper = renderer.create(<CheckBoxCircle />);

  it('render correctly checkBoxCircle view', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
