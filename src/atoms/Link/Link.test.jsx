import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('Link component', () => {
	test('Matches the snapshot', () => {
		const linkComponent = shallow(<Link text="A link" href=" " />);
		expect(linkComponent).toMatchSnapshot();
	});
	test('Adds class if icon is passed', () => {
		const linkComponent = shallow(<Link text="A link" href=" " icon={<i />} />);
		expect(linkComponent.find('a').hasClass('with-icon')).toEqual(true);
	});
});
