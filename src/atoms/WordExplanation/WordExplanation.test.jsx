import React, { useEffect } from 'react';
import { mount, shallow } from 'enzyme';
import WordExplanation from './WordExplanation';

const placeholderText = `This is the explanation of the word
written in one or more paragraphs depending on the amount of space needed`;

const mockUseEffect = () => useEffect.mockImplementationOnce(f => f());

describe('WordExplanation component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<WordExplanation explanation={placeholderText}>Something else</WordExplanation>);
		expect(wrapper).toMatchSnapshot();
	});
	test('Info box should not exist on init', () => {
		const wrapper = shallow(<WordExplanation explanation={placeholderText}>Text and stuff</WordExplanation>);
		expect(wrapper.exists('.info-box')).toEqual(false);
	});
	test('Info box should render on click', () => {
		const wrapper = shallow(<WordExplanation explanation={placeholderText}>Text and stuff</WordExplanation>);
		wrapper.find('.word-explanation-wrap').simulate('click');
		expect(wrapper.exists('.info-text')).toEqual(true);
	});
	// TODO: Test hooks and
});
