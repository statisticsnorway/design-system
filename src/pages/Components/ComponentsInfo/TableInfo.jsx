import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import {
	Divider,
	LeadParagraph,
	Paragraph,
	Tabs,
	Title,
} from '@statisticsnorway/ssb-component-library';
import {
	overviewText,
	LeadText,
	TableExample,
	codeReact,
	codeHtml,
	PropsTableComponent,
} from './TableInfoContent';

const tabItems = [
	{ title: 'Oversikt', path: '/overview' },
	{ title: 'Props', path: '/props' },
];

const tabCode = [
	{ title: 'React', path: '/react' },
	{ title: 'Html', path: '/html' },
];

const TableInfo = () => {
	const [activeTab, setActiveTab] = useState({
		contentTab: tabItems[0].path,
		codeTab: tabCode[0].path,
	});

	const handleTabClick = (newTabPath, tabType) => {
		setActiveTab(prevState => ({
			...prevState,
			[tabType]: newTabPath,
		}));
	};

	return (
		<div className="col-lg-12">
			<Title size={1}>Table</Title>
			<LeadParagraph>{LeadText}</LeadParagraph>
			<Tabs
				activeOnInit={activeTab.contentTab}
				items={tabItems}
				onClick={newTabPath => handleTabClick(newTabPath, 'contentTab')}
			/>

			<Divider className="mb-4" />

			{activeTab.contentTab === '/overview' && (
				<div className="row mb-4">
					<Title size={2} className="col-lg-12">
						Retningslinjer for tabell
					</Title>
					<div className="col-lg col-md-12">
						<Paragraph>{overviewText}</Paragraph>
					</div>
					<div className="col-lg col-md-12">
						<TableExample />
					</div>
					<div className="component-example col-lg col-md-12 divider-left" />
					<div className="col-lg-12">
						<Tabs
							activeOnInit={activeTab.codeTab}
							items={tabCode}
							onClick={newTabPath => handleTabClick(newTabPath, 'codeTab')}
						/>
						<Divider light />
						{activeTab.codeTab === '/react' && (
							<CodeSnippet code={codeReact || ''} language="jsx" />
						)}
						{activeTab.codeTab === '/html' && (
							<CodeSnippet code={codeHtml || ''} language="html" />
						)}
					</div>
				</div>
			)}

			{activeTab.contentTab === '/props' && (
				<div>
					<PropsTableComponent />
				</div>
			)}
		</div>
	);
};

export default TableInfo;
