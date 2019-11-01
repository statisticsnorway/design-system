import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, Input, LeadParagraph, Link, Tabs, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Search form are an input element that combines an input form and a clickable search icon 
to allow the user to search for specific word or phrases by inputing the data into the search form.
`;

const overviewTextFactbox = `
With the search form user can quickly search for what they are looking for on the website.
`;

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
	}, {
		title: 'Begrunnelse',
		path: '/begrunnelse',
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
<Input
  ariaLabel="Input field Search"
  placeholder="Search text"
  searchField
  submitCallback={handleSubmit}
  value={someValue}
/>
`;

const codeHtml = `
<div class="ssb-input">
    <div class="input-wrapper">
        <input id="input1" aria-label="Input field Search" placeholder="Search text" />
        <div class="icon-wrapper">
            <icon>search</icon>
        </div>
    </div>
</div>
`;

const SearchBoxInfo = () => {
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
			<Title size={1}>Search form</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/oversikt' && (
				<div className="mt-3">
					<div className="row mt-3">
						<Title size={3} className="col-lg-12">Seach form</Title>
						<div className="col-lg-6">
							<p>{overviewTextFactbox}</p>
						</div>
						<div className="col-lg-6">
							<Input
								ariaLabel="Input field Search"
								placeholder="Search text"
								searchField
							/>
						</div>
						<div className="col-lg-12">
							<Divider light className="mt-3" />
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider />
							{activeCodeTab === '/react' && (
								<div className="col-lg-12 mt-3">
									<Title size={4}>React code</Title>
									<CodeSnippet code={codeReact} language="jsx" />
								</div>
							)}
							{activeCodeTab === '/html' && (
								<div className="col-lg-12 mt-3">
									<Title size={4}>Html code</Title>
									<CodeSnippet code={codeHtml} language="html" />
								</div>
							)}
						</div>
					</div>

					<Divider className="mt-3" />

					<div className="col-lg-3 mt-3">
						<Title size={4}>Props</Title>
						<ul>
							<li><Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Input" isExternal>Same as Input</Link></li>
						</ul>
					</div>

				</div>
			)}

		</div>
	);
};

export default SearchBoxInfo;
