import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import MegaMenuAlpha from './MegaMenuAlpha';
import MegaMenuBeta from './MegaMenuBeta';

storiesOf('molecules|MegaMenu', module).addDecorator(centered)
	.add('Prototype 1', () => (
		<div className="row" className="row" style={{
			"position": "absolute",
			"top": 0,
			"width": "100%",
			"left": 0
		}}>
			<div className="col-12">
				<MegaMenuAlpha />
			</div>
		</div>
	))
	.add('Prototype 2', () => (
		<div className="row" style={{
			"position": "absolute",
			"top": 0,
			"width": "100%",
			"left": 0
		}}>
			<div className="col-12" style={{ "max-width": "980px", "margin" : "0 auto" }}>
				<MegaMenuBeta />
			</div>
		</div>
	))
