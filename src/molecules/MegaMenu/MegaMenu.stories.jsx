import React from 'react';
import { storiesOf } from '@storybook/react';
import MegaMenuAlpha from './MegaMenuAlpha';
import MegaMenuBeta from './MegaMenuBeta';

const menuWidth = {
	"maxWidth": "1240px",
	"margin": "0 auto"
}

storiesOf('molecules|MegaMenu', module)
	.add('Prototype 1', () => (
		<div className="row">
			<div className="col-12" style={menuWidth}>
				<MegaMenuAlpha />
			</div>
		</div>
	))
	.add('Prototype 2', () => (
		<div className="row">
			<div className="col-12" style={menuWidth}>
				<MegaMenuBeta />
			</div>
		</div>
	))
