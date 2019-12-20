import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, Header, Input, LeadParagraph, Link, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import SsbLogo from '../../../../public/ssb-logo-green.svg';

const tabItems = [
	{
		title: 'Oversikt',
		path: '/oversikt',
	}, {
		title: 'Props',
		path: '/props',
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

const items = [
	{
		title: 'Category 1',
		path: 'category1/',
	},
	{
		title: 'Category 2',
		path: 'category2/',
	},
	{
		title: 'Category 3',
		path: 'category3/',
	},
	{
		title: 'Category 4',
		path: 'category4/',
	},
];

const codeTag = `
<Header>
  {/* Fill with content, as below */}
    <div className="global-links" style={{ float: 'right', marginBottom: '12px', marginTop: '10px'  }}>
        <Link href=" ">top-item 3</Link>
        <Link href=" ">top-item 2</Link>
        <Link href=" ">top-item 1</Link>
    </div>
    <div className="top-row flex-row justify-space-between flex-wrap" style={{ width: '100%' }}>
        <SsbLogo alt="ssb-logo" />
        <div className="searchfield" style={{ width: '285px', alignSelf: 'flex-end' }}>
            <Input ariaLabel="Input field Search" searchField placeholder="Search text" />
        </div>
    </div>
    <div className="header-content" style={{ marginBottom: '20px', marginTop: '14px' }}>
        <Tabs items={items} />
        <Divider />
    </div>
</Header>
`;

const codeTagHtml = `
<div class="ssb-header-wrapper">
<!-- Fill with content, as below -->
    <div class="global-links" style="float: right; margin-bottom: 12px; margin-top: 10px;">
        <a class="ssb-link" href=" " target="" rel=""><span class="link-text">top-item 3</span></a>
        <a class="ssb-link" href=" " target="" rel=""><span class="link-text">top-item 2</span></a>
        <a class="ssb-link" href=" " target="" rel=""><span class="link-text">top-item 1</span></a>
    </div>
    <div class="top-row flex-row justify-space-between flex-wrap" style="width: 100%;">
        {insert SSB logo with size h:44px w:248px}
        <div class="searchfield" style="width: 285px; align-self: flex-end;">
            <div class="ssb-input ">
                <div class="input-wrapper">
                    <input id="search-input" type="text" placeholder="Search text" aria-label="Input field Search" class=" with-icon" value="">
                    <button class="icon-wrapper search-icon">
                        <i>{feather.search 18px}</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="header-content" style="margin-bottom: 20px; margin-top: 14px;">
        <div class="ssb-tabs">
            <button class="navigation-item "><span>Category 1</span></button>
            <button class="navigation-item "><span>Category 2</span></button>
            <button class="navigation-item "><span>Category 3</span></button>
            <button class="navigation-item "><span>Category 4</span></button>
        </div>
        <hr class="ssb-divider">
    </div>
</div>
`;

const HeaderInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Header</Title>
			<LeadParagraph>
				Tekst kommer
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Header</Title>
						<div className="col-lg-6">
							<Paragraph>
								Tekst kommer
							</Paragraph>
						</div>
						<div className="component-example col-lg-12">
							<Header>
								<div className="global-links" style={{ float: 'right', marginBottom: '12px', marginTop: '10px' }}>
									<Link href=" ">top-item 3</Link>
									<Link href=" ">top-item 2</Link>
									<Link href=" ">top-item 1</Link>
								</div>
								<div className="top-row flex-row justify-space-between flex-wrap" style={{ width: '100%' }}>
									<img src={SsbLogo} alt="ssb-logo" />
									<div className="searchfield" style={{ width: '285px', alignSelf: 'flex-end' }}>
										<Input ariaLabel="Input field Search" searchField placeholder="Search text" />
									</div>
								</div>
								<div className="header-content" style={{ marginBottom: '20px', marginTop: '14px' }}>
									<Tabs items={items} />
									<Divider />
								</div>
							</Header>
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeTag} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeTagHtml} language="html" />}
						</div>
					</div>

				</div>
			)}
			{activeTab === '/props' && (
				<div>
					<Title size={2}>Props</Title>
					<table className="col-lg-12 mb-4">
						<thead style={{ textAlign: 'left' }}>
							<tr>
								<th><Title size={3}>Prop name</Title></th>
								<th><Title size={3}>Type</Title></th>
								<th><Title size={3}>Description</Title></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>children</code></td>
								<td>node</td>
								<td>All rendered content</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}

		</div>
	);
};

export default HeaderInfo;
