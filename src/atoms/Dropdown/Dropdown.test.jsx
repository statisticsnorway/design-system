import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

const mockedItems = [
	{
		title: 'Apples',
		id: 'item1',
	}, {
		title: 'Rainbows',
		id: 'item2',
	}, {
		title: 'Ocean',
		id: 'item3',
	}, {
		title: 'Automobiles',
		id: 'item4',
	},
];

describe('Dropdown component', () => {
	test('Matches the snapshot', () => {
		const wrapper = shallow(<Dropdown />);
		expect(wrapper).toMatchSnapshot();
	});
	test('Should not be open on init', () => {
		const wrapper = shallow(<Dropdown />);
		expect(wrapper.exists('.list-of-options')).toEqual(false);
	});
	test('List of options should render on click', () => {
		const wrapper = shallow(<Dropdown />);
		wrapper.find('.dropdown-interactive-area').simulate('click');
		expect(wrapper.exists('.list-of-options')).toEqual(true);
	});
	test('Callback should fire on option select', () => {
		const mockedFunction = jest.fn();
		const wrapper = shallow(<Dropdown items={mockedItems} onSelect={e => mockedFunction(e)} />);
		wrapper.find('.dropdown-interactive-area').simulate('click');
		wrapper.find('#item2').simulate('click');
		expect(mockedFunction.mock.calls.length).toBe(1)
	});

	// TODO: Write tests for event listeners
});
