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
	PropsTable,
} from './TableInfoContent';
import ComponentPropsInfo from '../ComponentPropsInfo';

const tabItems = [
	{ title: 'Oversikt', path: '/overview' },
	{ title: 'Props', path: '/props' },
];

const tabCode = [
	{ title: 'React', path: '/react' },
	{ title: 'Html', path: '/html' },
];

const propsInfo = [
	{
		title: 'Table',
		props: [
			{
				name: 'caption',
				type: 'string',
				description: 'Optional caption for the table',
			},
			{
				name: 'dataNoteRefs',
				type: 'string',
				description: 'References to data notes',
			},
			{
				name: 'className',
				type: 'string',
				description: 'Optional container class',
			},
			{
				name: 'children',
				type: 'ReactNode',
				description: 'Content to be displayed within the component',
			},
		],
	},
	{
		title: 'TableHead, TableBody, TableFooter, and TableRow',
		props: [
			{
				name: 'className',
				type: 'string',
				description: 'Optional container class',
			},
			{
				name: 'children',
				type: 'ReactNode',
				description: 'Content to be displayed within the component',
			},
		],
	},
	{
		title: 'Table Cell',
		props: [
			{
				name: 'id',
				type: 'string',
				description: 'Unique identifier for the table cell',
			},
			{
				name: 'className',
				type: 'string',
				description: 'Optional container class',
			},
			{
				name: 'type',
				type: "'th' | 'td'",
				description: 'Specifies whether the cell is a header or standard cell',
			},
			{
				name: 'rowSpan',
				type: 'number',
				description: 'Number of rows the cell should span',
			},
			{
				name: 'colSpan',
				type: 'number',
				description: 'Number of columns the cell should span',
			},
			{
				name: 'headers',
				type: 'string',
				description: 'IDs of header cells this cell is related to',
			},
			{
				name: 'scope',
				type: "'col' | 'colgroup' | 'row' | 'rowgroup'",
				description: 'Specifies the scope of the header cell',
			},
			{
				name: 'align',
				type: "'left' | 'center' | 'right'",
				description: 'Text alignment within the cell',
			},
			{
				name: 'indentationLevel',
				type: "'1' | '2' | '3'",
				description: 'Specifies the level of indentation',
			},
			{
				name: 'children',
				type: 'ReactNode | string | number',
				description: 'Content to be displayed within the cell',
			},
		],
	},
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
					<div className="col-12">
						<TableExample />
					</div>
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
				<ComponentPropsInfo propsInfo={propsInfo} />
			) }
		</div>
	);
};

export default TableInfo;
