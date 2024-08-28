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
	TableExample,
	codeReact,
	codeHtml,
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
			<LeadParagraph>
				Tabeller brukes til å organisere og vise data på en strukturert måte.
				Ulike skjermlesere håndterer tabeller litt forskjellig, men felles er at
				bare en liten del av tabellen kan presenteres av gangen: ofte bare én
				celle. Det er en fordel at tabellceller ikke slås sammen, og at cellene
				ikke inneholder mer enn ett interaktivt element.
			</LeadParagraph>
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
							<CodeSnippet code={codeReact} language="jsx" />
						)}
						{activeTab.codeTab === '/html' && (
							<CodeSnippet code={codeHtml} language="html" />
						)}
					</div>
				</div>
			)}

			{activeTab.contentTab === '/props' && (
				<div>
					<div className="row col-lg-12">
						<table className="col-lg-12 mb-4">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th>
										<Title size={3}>TableElementProps</Title>
									</th>
									<th>
										<Title size={3}>Type</Title>
									</th>
									<th>
										<Title size={3}>Description</Title>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>className</code>
									</td>
									<td>string</td>
									<td>Optional container class</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>children</code>
									</td>
									<td>ReactNode</td>
									<td>Content to be displayed within the component</td>
								</tr>
							</tbody>
						</table>

						<Divider className="mb-4" light />

						<table className="col-lg-12 mb-4">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th>
										<Title size={3}>TableProps</Title>
									</th>
									<th>
										<Title size={3}>Type</Title>
									</th>
									<th>
										<Title size={3}>Description</Title>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>caption</code>
									</td>
									<td>string</td>
									<td>Optional caption for the table</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>dataNoteRefs</code>
									</td>
									<td>string</td>
									<td>References to data notes</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>className</code>
									</td>
									<td>string</td>
									<td>Optional container class</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>children</code>
									</td>
									<td>ReactNode</td>
									<td>Content to be displayed within the component</td>
								</tr>
							</tbody>
						</table>

						<Divider className="mb-4" light />

						<table className="col-lg-12 mb-4">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th>
										<Title size={3}>TableCellProps</Title>
									</th>
									<th>
										<Title size={3}>Type</Title>
									</th>
									<th>
										<Title size={3}>Description</Title>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>id</code>
									</td>
									<td>string</td>
									<td>Unique identifier for the table cell</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>className</code>
									</td>
									<td>string</td>
									<td>Optional container class</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>type</code>
									</td>
									<td>&apos;th&apos; | &apos;td&apos;</td>
									<td>
										Specifies whether the cell is a header or standard cell
									</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>rowSpan</code>
									</td>
									<td>number</td>
									<td>Number of rows the cell should span</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>colSpan</code>
									</td>
									<td>number</td>
									<td>Number of columns the cell should span</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>headers</code>
									</td>
									<td>string</td>
									<td>IDs of header cells this cell is related to</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>scope</code>
									</td>
									<td>
										&apos;col&apos; | &apos;colgroup&apos; | &apos;row&apos; |
										&apos;rowgroup&apos;
									</td>
									<td>Specifies the scope of the header cell</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>align</code>
									</td>
									<td>
										&apos;left&apos; | &apos;center&apos; | &apos;right&apos;
									</td>
									<td>Text alignment within the cell</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>indentationLevel</code>
									</td>
									<td>&apos;1&apos; | &apos;2&apos; | &apos;3&apos;</td>
									<td>Specifies the level of indentation</td>
								</tr>
								<tr>
									<td style={{ paddingLeft: '20px' }}>
										<code>children</code>
									</td>
									<td>ReactNode | string | number</td>
									<td>Content to be displayed within the cell</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
};

export default TableInfo;
