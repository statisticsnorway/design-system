import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, Input, LeadParagraph, Link, Paragraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

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
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Search form</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-3" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-3">
						<Title size={2} className="col-lg-12">Seach form</Title>
						<div className="col-lg-6">
							<Paragraph>{overviewTextFactbox}</Paragraph>
						</div>
						<div className="col-lg-6 divider-left d-flex flex-column align-items-center">
							<div className="d-flex mb-4">
								<Input
									ariaLabel="Input field Search"
									placeholder="Search text"
									searchField
								/>
							</div>
							<div className="d-flex justify-content-center negative-wrapper">
								<Input
									ariaLabel="Input field Search"
									placeholder="Search text"
									searchField
									negative
								/>
							</div>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-3" />

					<div>
						<Title size={2}>Props</Title>
						<Text>The search field is a modification of
							the <Link href="https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Input" isExternal>input</Link> component,
							and therefore has the same props.
						</Text>
					</div>

				</div>
			)}

		</div>
	);
};

export default SearchBoxInfo;
