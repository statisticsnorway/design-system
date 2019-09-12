import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Input />);
		expect(wrapper).toMatchSnapshot();
	});
});
