import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import {
	Divider,
	LeadParagraph,
	Paragraph,
	Tabs,
	Title,
	Table as SSBTable,
	TableHead,
	TableBody,
	TableFooter,
	TableRow,
	TableCell,
} from '@statisticsnorway/ssb-component-library';

const tabItems = [
	{ title: 'Oversikt', path: '/overview' },
	{ title: 'Props', path: '/props' },
];

const tabCode = [
	{ title: 'React', path: '/react' },
	{ title: 'Html', path: '/html' },
];

const overviewText = 'Rad- og kolonneoverskrifter er essensielle. En celle er en overskrift hvis den beskriver innholdet i cellene under eller ved siden av. Juster tall for enklere sammenligning.';

const tableData = [
	{
		id: 'museer_totalt',
		header: 'Museer og samlinger totalt',
		data: ['102', '101', '104'],
	},
	{
		id: 'besok_totalt',
		header: 'Besøk totalt',
		data: ['5 134 293', '6 485 173', '10 321 374'],
		bold: true,
	},
	{
		id: 'enkeltbesok',
		header: 'Enkeltbesøk',
		data: ['4 421 942', '5 474 120', '8 491 379'],
	},
	{
		id: 'gruppebesok',
		header: 'Gruppebesøk',
		data: ['712 351', '1 011 053', '1 829 995'],
	},
	{
		id: 'betalende',
		header: 'Betalende besøkende',
		data: ['2 391 962', '2 774 376', '5 654 919'],
	},
	{ id: 'arsverk', header: 'Årsverk', data: ['', '', ''] },
	{ id: 'lonte', header: 'Lønte', data: ['4173', '4404', '4645'] },
	{
		id: 'faste_stillinger',
		header: 'Faste stillinger',
		data: ['3359', '3516', '3683'],
	},
];

const generateKey = (baseKey, suffix) => `${baseKey}_${suffix}`;

const Statistics = () => (
	<SSBTable caption="Antall besøk og årsverk på museer og samlinger">
		<TableHead>
			<TableRow>
				<TableCell type="th" colSpan={1} />
				<TableCell type="th" colSpan={3} align="center">
					Antall
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell type="th">Museer og samlinger totalt</TableCell>
				{['2020', '2021', '2022'].map(year => (
					<TableCell type="th" align="right" key={`year_${year}`}>
						{year}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
		<TableBody>
			{tableData.map(row => (
				<TableRow key={row.id}>
					<TableCell type="th" scope="row">
						{row.header}
					</TableCell>
					{row.data.map((item, idx) => (
						<TableCell
							align="right"
							style={row.bold ? { fontWeight: 'bold' } : {}}
							key={generateKey(row.id, idx)}
						>
							{item}
						</TableCell>
					))}
				</TableRow>
			))}
		</TableBody>
		<TableFooter>
			<TableRow>
				<TableCell type="td" colSpan={4}>
					<div>
						<sup>1</sup> Tallet på museer vil variere fra år til år. For
						eksempel leverer noen museer tall til statistikken ett år, men ikke
						et annet.
					</div>
				</TableCell>
			</TableRow>
		</TableFooter>
	</SSBTable>
);

const codeReact = `
import { Table, TableHead, TableBody, TableFooter, TableRow, TableCell } from "@statisticsnorway/ssb-component-library";

const SimpleTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell type="th">Header 1</TableCell>
        <TableCell type="th">Header 2</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Data 1</TableCell>
        <TableCell>Data 2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>More Data 1</TableCell>
        <TableCell>More Data 2</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>Footer Information</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export default SimpleTable;
`;

const codeHtml = `
  <table>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
      <tr>
        <td>More Data 1</td>
        <td>More Data 2</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">Footer Information</td>
      </tr>
    </tfoot>
  </table>
`;

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
						<Statistics />
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
