import React from 'react';
import { shallow } from 'enzyme';
import Number from './Number';

describe('Number component', () => {
	test('Matches the snapshot', () => {
		const numberComponent = shallow(<Number number="23423" />);
		expect(numberComponent).toMatchSnapshot();
	});
});
