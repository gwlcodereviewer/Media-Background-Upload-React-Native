import React from 'react';
import renderer from 'react-test-renderer';
import PrimaryButton from '.';

let wrapper: renderer.ReactTestRenderer;

describe('render correctly', () => {
  wrapper = renderer.create(<PrimaryButton title='Submit' onPress={() => {}}/>);

  it('render correctly primaryButton view', () => {
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
