import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('Link component', () => {
	test('Matches the snapshot', () => {
		const linkComponent = shallow(<Link href=" ">A link</Link>);
		expect(linkComponent).toMatchSnapshot();
	});
	test('Adds class if icon is passed', () => {
		const linkComponent = shallow(<Link href=" " icon={<i />}>A link</Link>);
		expect(linkComponent.find('a').hasClass('with-icon')).toEqual(true);
	});
});
