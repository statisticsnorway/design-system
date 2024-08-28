import React from 'react';
import {
	Table as SSBTable,
	TableHead,
	TableBody,
	TableFooter,
	TableRow,
	TableCell,
} from '@statisticsnorway/ssb-component-library';

export const overviewText = 'Rad- og kolonneoverskrifter er essensielle. En celle er overskrift hvis den beskriver innholdet i cellene under eller ved siden av. Juster tall for enkel sammenligning.';

export const tableData = [
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

export const codeReact = `
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

export const codeHtml = `
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

export const TableExample = () => (
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
					{row.data.map(item => (
						<TableCell
							align="right"
							style={row.bold ? { fontWeight: 'bold' } : {}}
							key={`${row.id}_${item}`}
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
