import React, { useState } from 'react';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import Divider from '@atoms/Divider/Divider';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Button from '@atoms/Button/Button';
import { ChevronDown, X } from 'react-feather';

const leadParagraphText = `
Buttons make common actions more obvious and help users more easily perform them.
Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them.
`;

const primaryButtonText = `
Primary button is the primary one
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

const codeExamplePrimary = `
<Button text="Primary" primary />
<Button text="Primary" primary icon={<ChevronDown size="26" />} />
<Button text="Primary" primary disabled />
`;

const codeExampleSecondary = `
<Button text="Secondary" />
<Button text="Secondary" icon={<ChevronDown size="26" />} />
<Button text="Secondary" disabled />
`;

const codeExampleDanger = `
<Button text="Primary" primary danger />
<Button text="Primary" primary danger icon={<ChevronDown size="26" />} />
<Button danger primary icon={<X size="26" />} />
`;

const ButtonInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<h1>Button</h1>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />
			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-12">Primary Button</h3>
						<div className="col-lg-6">
							<p>
								Primary button is the primary one and it is super important.
							</p>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button text="Primary" primary />
							<Button text="Primary" primary icon={<ChevronDown size="26" />} />
							<Button text="Primary" primary disabled />
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExamplePrimary} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-12">Secondary Button</h3>
						<div className="col-lg-6">
							<p>
								Secondary button is also important, but not as much as primary.
							</p>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button text="Secondary" />
							<Button text="Secondary" icon={<ChevronDown size="26" />} />
							<Button text="Secondary" disabled />
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExampleSecondary} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-12">Danger Button</h3>
						<div className="col-lg-6">
							<p>
								We hope to not cause any danger, so let&apos;s forget about this.
							</p>
						</div>
						<div className="col-lg-6 d-flex flex-row">
							<Button text="Secondary" primary danger />
							<Button text="Secondary" primary danger icon={<ChevronDown size="26" />} />
							<Button danger primary icon={<X size="26" />} />
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={codeExampleDanger} language="jsx" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ButtonInfo;
