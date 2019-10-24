import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import MegaMenuAlpha from './MegaMenuAlpha';
import MegaMenuBeta from './MegaMenuBeta';

const wrapperPosition = {
	"position": "absolute",
	"top": 0,
	"width": "100%",
	"left": 0
}

const menuWidth = {
	"max-width": "1240px",
	"margin": "0 auto"
}

storiesOf('molecules|MegaMenu', module).addDecorator(centered)
	.add('Prototype 1', () => (
		<div className="row" className="row" style={wrapperPosition}>
			<div className="col-12" style={menuWidth}>
				<MegaMenuAlpha />
			</div>
		</div>
	))
	.add('Prototype 2', () => (
		<div className="row" style={wrapperPosition}>
			<div className="col-12" style={menuWidth}>
				<MegaMenuBeta />
			</div>
		</div>
	))
