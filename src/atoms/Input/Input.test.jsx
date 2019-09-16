import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from './Input';

describe('Input component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Input />);
		expect(wrapper).toMatchSnapshot();
	});
	test('Passed value matches', () => {
		const wrapper = shallow(<Input value="Some text" />);
		expect(wrapper.find('input').prop('value')).toEqual('Some text');
	});
	test('Changes input correctly', () => {
		const mockedFunction = jest.fn();
		const wrapper = shallow(<Input handleChange={e => mockedFunction(e)} /> );
		wrapper.find('input').simulate('change', {target: {value: 'hello'}});
		expect(mockedFunction.mock.calls.length).toBe(1)
		expect(wrapper.find('input').prop('value')).toEqual('hello');
	});
});
