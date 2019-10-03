import React, { useState } from 'react'
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import Checkbox from '@atoms/Checkbox/Checkbox';
import CheckboxGroup from '@molecules/CheckboxGroup/CheckboxGroup';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Divider from '@atoms/Divider/Divider';

const leadParagraphText = `
Checkbox beskrivelse
`;

const overviewTextCheckbox = `
Checkbox er en komponent som benyttes i skjemaer for å gi brukeren muligheten til å avgi et eller flere svar på spørsmålet som blir stilt.
`;

const overviewTextCheckboxGroup = `
CheckboxGroup er en samling av flere Checkboxes.
`;

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	}, {
		title: 'Accessibility',
		path: '/accessibility',
	},
];

const codeExampleCheckbox = `
<Checkbox
	value="checkbox"
	label="Checkbox"
/>
`;

const codeExampleCheckboxGroup = `
<CheckboxGroup
	header="Header"
	items={[
		{ label: 'Checkbox 1', value: 'checkbox1' },
		{ label: 'Checkbox 2', value: 'checkbox2' },
	]}
/>
`;

const CheckboxInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<h1>Checkbox</h1>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-12">Checkbox</h3>
						<div className="col-lg-6">
							<p>{overviewTextCheckbox}</p>
						</div>
						<div className="col-lg-6">
							<Checkbox
								value="checkbox"
								label="Checkbox"
							/>
						</div>
						<div className="col-lg-12  mt-3">
							<CodeSnippet code={codeExampleCheckbox} language="jsx" />
						</div>
					</div>
					<Divider />
					<div className="row mt-3">
						<h3 className="col-lg-12">CheckboxGroup</h3>
						<div className="col-lg-6">
							<p>{overviewTextCheckboxGroup}</p>
						</div>
						<div className="col-lg-6">
							<CheckboxGroup
								header="Header"
								items={[
									{ label: 'Checkbox 1', value: 'checkbox1' },
									{ label: 'Checkbox 2', value: 'checkbox2' },
								]}
							/>
						</div>
						<div className="col-lg-12  mt-3">
							<CodeSnippet code={codeExampleCheckboxGroup} language="jsx" />
						</div>
					</div>

					<Divider />
				</div>
			)}
		</div>
	);
};

export default CheckboxInfo;
