import React, { useState } from 'react';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import { Dialog, Divider, LeadParagraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Warning alters are a banner-like element used to tell the user about something that has gone wrong.
There are two different types of warnings: the information error and the error warning. Error warnings are used when something is explicitly wrong,
to warn the user of something has gone wrong in the system. The information error are used for informative purposes,
for example when a piece of content has been moved, content has stopped being updated. Warning alerts are meant to persist and are not dismissible.  
`;

const errorWarningText = `
Error warnings are defined by its red color to indicate something wrong,
it is also accompanied by a warning icon using triangle layout and is always placed at the top of the page underneath the header.
`;

const infoWarningText = `
Information warnings are defined by its blue color to separate itself from error warning visually, it also has a rounded information icon.
Similar to the error warning the information warning are also placed at the top of the page underneath the header. 
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
	}, {
		title: 'Begrunnelse',
		path: '/begrunnelse',
	}, {
		title: 'Tilgjengelighet',
		path: '/tilgjengelighet',
	},
];

const tabCode = [
	{
		title: 'React',
		path: '/react',
	}, {
		title: 'Html',
		path: '/html',
	},
];

const codeWarningReact = `
<Dialog type='warning' title="A fitting title">
  Insert content here
</Dialog> 
`;

const codeWarningHtml = `
<div class="ssb-dialog warning">
    <div class="icon-panel">
        <Icon />
    </div>
    <div class="dialog-content">
        <span class="dialog-title">A fitting title</span>
        <p>Insert content here</p>
    </div>
</div>
`;

const codeInfoReact = `
<Dialog type='info' title="A fitting title">
  Insert content here
</Dialog> 
`;

const codeInfoHtml = `
<div class="ssb-dialog info">
    <div class="icon-panel">
        <Icon />
    </div>
    <div class="dialog-content">
        <span class="dialog-title">A fitting title</span>
        <p>Insert content here</p>
    </div>
</div>
`;

const DialogInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	const tabCodeClicked = e => {
		changeCodeTab(e);
	};

	return (
		<div className="col-lg-12">
			<Title size={1}>Warning Alerts</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/oversikt' && (
				<div className="mt-3">
					<div className="row mt-3">
						<Title size={3} className="col-lg-12">Error warning</Title>
						<div className="col-lg-6">
							<p>{errorWarningText}</p>
						</div>
						<div className="col-lg-6">
							<Dialog type="warning" title="A fitting title">
								Insert content here
							</Dialog>
						</div>
						<div className="col-lg-12">
							<div className="col-lg-12 mt-3">
								<Divider light className="mt-3" />
								<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
								<Divider />
							</div>
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>React code</Title>
									<CodeSnippet code={codeWarningReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>Html code</Title>
									<CodeSnippet code={codeWarningHtml} language="html" />
								</div>
							)}
						</div>
					</div>

					<div className="row mt-3">
						<Title size={3} className="col-lg-12">Information warning</Title>
						<div className="col-lg-6">
							<p>{infoWarningText}</p>
						</div>
						<div className="col-lg-6">
							<Dialog type="info" title="A fitting title">
								Insert content here
							</Dialog>
						</div>
						<div className="col-lg-12">
							<Divider light className="mt-3" />
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider />
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>React code</Title>
									<CodeSnippet code={codeInfoReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>Html code</Title>
									<CodeSnippet code={codeInfoHtml} language="html" />
								</div>
							)}
						</div>
					</div>

					<div className="row">
						<Title size={3} className="col-lg-12 mt-3">Props</Title>
						<table className="col-lg-12">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th><h5>Prop name</h5></th>
									<th><h5>Type</h5></th>
									<th><h5>Description</h5></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>children</code></td>
									<td>Required node</td>
									<td>Content within the wrapper</td>
								</tr>
								<tr>
									<td><code>title</code></td>
									<td>Required string</td>
									<td>Bold text as a title</td>
								</tr>
								<tr>
									<td><code>type</code></td>
									<td>info or warning</td>
									<td>Changes color and icon</td>
								</tr>
							</tbody>
						</table>
					</div>

				</div>
			)}
			{activeTab === '/begrunnelse' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Colors</Title>
						<div className="col-lg-6">
							The red color of warning was chosen because red being associated with error. The blue color was chosen to differentiate from the red and the green.
							It has also been tested through different colorblindness test to ensure that the colors would still provide difference in contrast.
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DialogInfo;
