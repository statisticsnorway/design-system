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
				<TableCell type="th" align="center">
					2020
				</TableCell>
				<TableCell type="th" align="center">
					2021
				</TableCell>
				<TableCell type="th" align="center">
					2022
				</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow>
				<TableCell type="th" scope="row">
					Museer og samlinger totalt<sup>1</sup>
				</TableCell>
				<TableCell align="center">102</TableCell>
				<TableCell align="center">101</TableCell>
				<TableCell align="center">104</TableCell>
			</TableRow>
			<TableRow>
				<TableCell type="th" scope="row" indentationLevel={1}>
					Besøk totalt
				</TableCell>
				<TableCell align="center" style={{ fontWeight: 'bold' }}>
					5 134 293
				</TableCell>
				<TableCell align="center" style={{ fontWeight: 'bold' }}>
					6 485 173
				</TableCell>
				<TableCell align="center" style={{ fontWeight: 'bold' }}>
					10 321 374
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell type="th" scope="row" indentationLevel={2}>
					Enkeltbesøk
				</TableCell>
				<TableCell align="center">4 421 942</TableCell>
				<TableCell align="center">5 474 120</TableCell>
				<TableCell align="center">8 491 379</TableCell>
			</TableRow>
			<TableRow>
				<TableCell type="th" scope="row" indentationLevel={2}>
					Gruppebesøk
				</TableCell>
				<TableCell align="center">712 351</TableCell>
				<TableCell align="center">1 011 053</TableCell>
				<TableCell align="center">1 829 995</TableCell>
			</TableRow>
			<TableRow>
				<TableCell type="th" scope="row" indentationLevel={2}>
					Betalende besøkende
				</TableCell>
				<TableCell align="center">2 391 962</TableCell>
				<TableCell align="center">2 774 376</TableCell>
				<TableCell align="center">5 654 919</TableCell>
			</TableRow>
			<TableRow>
				<TableCell type="th" scope="row" indentationLevel={1}>
					Årsverk
				</TableCell>
				<TableCell align="center" />
				<TableCell align="center" />
				<TableCell align="center" />
			</TableRow>
			<TableRow>
				<TableCell type="th" scope="row" indentationLevel={2}>
					Lønte
				</TableCell>
				<TableCell align="center">4 173</TableCell>
				<TableCell align="center">4 404</TableCell>
				<TableCell align="center">4 645</TableCell>
			</TableRow>
			<TableRow>
				<TableCell type="th" scope="row" indentationLevel={2}>
					Faste stillinger
				</TableCell>
				<TableCell align="center">3 359</TableCell>
				<TableCell align="center">3 516</TableCell>
				<TableCell align="center">3 683</TableCell>
			</TableRow>
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
