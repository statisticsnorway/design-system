import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
	test('Matches the snapshot', () => {
		const button = shallow(<Button text="Button" />);
		expect(button).toMatchSnapshot();
	});

	test('Adds class if "danger" is true', () => {
		const button = shallow(<Button text="Button" danger />);
		expect(button.find('button').hasClass('danger')).toEqual(true);
	});

	test('Changes class if it is a primary button', () => {
		const button = shallow(<Button text="Button" primary />);
		expect(button.find('button').hasClass('primary')).toEqual(true);
	});
});
