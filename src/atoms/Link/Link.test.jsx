import React from 'react';
import TestRenderer from 'react-test-renderer';
import Link from './Link';

describe('Link component', () => {
	test('Matches the snapshot', () => {
		const button = TestRenderer.create(<Link text="A link" href=" " />);
		expect(button.toJSON()).toMatchSnapshot();
	});
});
