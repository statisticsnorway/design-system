import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from './Button';

describe('Button component', () => {
	test('Matches the snapshot', () => {
		const button = TestRenderer.create(<Button text="button" />);
		expect(button.toJSON()).toMatchSnapshot();
	});
});
