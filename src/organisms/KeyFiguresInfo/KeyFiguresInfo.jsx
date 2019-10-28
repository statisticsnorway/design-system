import React, { useState } from 'react';
import { Divider, LeadParagraph, KeyFigures, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import { Home } from 'react-feather';

const leadParagraphText = `
Key numbers are a visual element that showcases important numbers that wants to be prominently displayed.
Key numbers comes in 3 different sizes, each made for different type of placements.
The large key number is displayed in its own row, while the medium and smaller key numbers can be placed in groups of two in the same row.
`;

const overviewText = `
Key numbers comprises of 5 visual elements, a label describing the key number, the year,
the key number, the description of the number and if necessary a text that describes the change number.
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

const tabCode = [
	{
		title: 'React',
		path: '/react',
	}, {
		title: 'Html',
		path: '/html',
	},
];

const codeReact = `
<KeyFigures
	number="789 398"
	title="Antall husholdninger"
	numberDescription="husholdninger"
	time="2018"
	size="small"
	icon={<Home size="240" />}
/>
`;

const codeHtml = `
<div class="ssb-key-figures">
	<div class="kf-icon small"><i /></div>
	<div>
		<h4 class="ssb-title no-margin">Antall husholdninger</h4>
		<div class="kf-time">2018</div>
		<div class="ssb-number small">789 398</div>
		<h4 class="ssb-title no-margin">husholdninger</h4>
	</div>
</div>
`;

const AccordionInfo = () => {
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
			<Title size={1}>Key Numbers</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />
			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Key Numbers</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewText}</Paragraph>
						</div>
						<div className="col-lg-6">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="small"
								icon={<Home size="140" />}
							/>
						</div>
						<div className="col-lg-12">
							<Divider light className="mt-3" />
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider />
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>React code</Title>
									<CodeSnippet code={codeReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={3}>Html code</Title>
									<CodeSnippet code={codeHtml} language="html" />
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
									<td><code>icon</code></td>
									<td>node</td>
									<td>Renders an icon</td>
								</tr>
								<tr>
									<td><code>number</code></td>
									<td>string or number</td>
									<td>Large number to be displayed</td>
								</tr>
								<tr>
									<td><code>numberDescription</code></td>
									<td>string</td>
									<td>Subtitle</td>
								</tr>
								<tr>
									<td><code>size</code></td>
									<td>small, medium or large</td>
									<td>Change size of number and icon</td>
								</tr>
								<tr>
									<td><code>title</code></td>
									<td>string</td>
									<td>Displays title</td>
								</tr>
								<tr>
									<td><code>time</code></td>
									<td>string or number</td>
									<td>Displays time for the number between title and number</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}
			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Element sizes</Title>
						<div className="col-lg-6">
							As seen in all different sizes of key numbers, only the key number itself changes
							size while all other elements retains the same size.
							This choice was made so that a clear design structure could be created and followed.
						</div>
						<div className="col-lg-12 mt-3 mb-3">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="large"
								icon={<Home size="280" />}
							/>
						</div>
						<div className="col-lg-12 mt-3 mb-3">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="medium"
								icon={<Home size="210" />}
							/>
						</div>
						<div className="col-lg-12 mt-3 mb-3">
							<KeyFigures
								number="789 398"
								title="Antall husholdninger"
								numberDescription="husholdninger"
								time="2018"
								size="small"
								icon={<Home size="140" />}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AccordionInfo;
