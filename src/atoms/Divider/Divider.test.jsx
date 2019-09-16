import React from 'react';
import { shallow, mount } from 'enzyme';
import Divider from './Divider';

describe('Divider component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Divider dark />);
		expect(wrapper).toMatchSnapshot();
	});
	test('Decides className from props', () => {
		const lightWrapper = shallow(<Divider light />);
		const darkWrapper = shallow(<Divider dark />);
		expect(lightWrapper.find('hr').hasClass('light')).toEqual(true);
		expect(darkWrapper.find('hr').hasClass('dark')).toEqual(true);
	})
});
