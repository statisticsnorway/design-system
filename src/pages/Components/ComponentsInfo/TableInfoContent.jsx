import React from 'react';
import {
	Table as SSBTable,
	TableHead,
	TableBody,
	TableFooter,
	TableRow,
	TableCell,
} from '@statisticsnorway/ssb-component-library';
import PropTypes from 'prop-types';

const tableData = [
	{
		id: 'museer_totalt',
		header: 'Museer og samlinger totalt',
		data: { 2020: '102', 2021: '101', 2022: '104' },
	},
	{
		id: 'besok_totalt',
		header: 'Besøk totalt',
		data: { 2020: '5 134 293', 2021: '6 485 173', 2022: '10 321 374' },
		bold: true,
	},
	{
		id: 'enkeltbesok',
		header: 'Enkeltbesøk',
		data: { 2020: '4 421 942', 2021: '5 474 120', 2022: '8 491 379' },
	},
	{
		id: 'gruppebesok',
		header: 'Gruppebesøk',
		data: { 2020: '712 351', 2021: '1 011 053', 2022: '1 829 995' },
	},
	{
		id: 'betalende',
		header: 'Betalende besøkende',
		data: { 2020: '2 391 962', 2021: '2 774 376', 2022: '5 654 919' },
	},
	{
		id: 'arsverk',
		header: 'Årsverk',
		data: { 2020: '', 2021: '', 2022: '' },
	},
	{
		id: 'lonte',
		header: 'Lønte',
		data: { 2020: '4173', 2021: '4404', 2022: '4645' },
	},
	{
		id: 'faste_stillinger',
		header: 'Faste stillinger',
		data: { 2020: '3359', 2021: '3516', 2022: '3683' },
	},
];

const TableHeaderRow = ({ years }) => (
	<TableHead>
		<TableRow>
			<TableCell type="th" colSpan={1} />
			<TableCell type="th" colSpan={years.length} align="center">
				Antall
			</TableCell>
		</TableRow>
		<TableRow>
			<TableCell type="th">Museer og samlinger totalt</TableCell>
			{years.map(year => (
				<TableCell type="th" align="right" key={`year_${year}`}>
					{year}
				</TableCell>
			))}
		</TableRow>
	</TableHead>
);

const TableBodyRows = ({ rowsData, years, boldStyle }) => (
	<TableBody>
		{rowsData.map(({ id, header, data, bold }) => (
			<TableRow key={id}>
				<TableCell type="th" scope="row">
					{header}
				</TableCell>
				{years.map(year => (
					<TableCell
						align="right"
						style={bold ? boldStyle : {}}
						key={`${id}_${year}`}
					>
						{data[year]}
					</TableCell>
				))}
			</TableRow>
		))}
	</TableBody>
);

export const TableExample = () => {
	const years = Object.keys(tableData[0].data);
	const boldStyle = { fontWeight: 'bold' };

	return (
		<SSBTable caption="Antall besøk og årsverk på museer og samlinger">
			<TableHeaderRow years={years} />
			<TableBodyRows rowsData={tableData} years={years} boldStyle={boldStyle} />
			<TableFooter>
				<TableRow>
					<TableCell type="td" colSpan={years.length + 1}>
						<div>
							<sup>1</sup> Tallet på museer vil variere fra år til år. For
							eksempel leverer noen museer tall til statistikken ett år, men
							ikke et annet.
						</div>
					</TableCell>
				</TableRow>
			</TableFooter>
		</SSBTable>
	);
};

TableHeaderRow.propTypes = {
	years: PropTypes.arrayOf(PropTypes.string).isRequired,
};

TableBodyRows.propTypes = {
	rowsData: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			header: PropTypes.string.isRequired,
			data: PropTypes.objectOf(PropTypes.string).isRequired,
			bold: PropTypes.bool,
		}),
	).isRequired,
	years: PropTypes.arrayOf(PropTypes.string).isRequired,
	boldStyle: PropTypes.object.isRequired,
};

export const overviewText = `
Det er viktig å bruke rad- og kolonneoverskrifter. En celle er en overskrift hvis den beskriver innholdet i cellene under. 
Som en hovedregel bør tall høyrejusteres for å gjøre det enkelt å sammenligne de. `;

export const LeadText = `
  Tabeller brukes til å organisere og vise data på en strukturert måte.
  Ulike skjermlesere håndterer tabeller litt forskjellig, men felles er at
  bare en liten del av tabellen kan presenteres av gangen: ofte bare én
  celle. Det er en fordel at tabellceller ikke slås sammen, og at cellene
  ikke inneholder mer enn ett interaktivt element.
`;

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


const StatisticTable = () => {
	const tableData = [
		{
			id: 'museer_totalt',
			header: 'Museer og samlinger totalt',
			data: { 2020: '102', 2021: '101', 2022: '104' },
		},
		{
			id: 'besok_totalt',
			header: 'Besøk totalt',
			data: { 2020: '5 134 293', 2021: '6 485 173', 2022: '10 321 374' },
			bold: true,
		},
		{
			id: 'enkeltbesok',
			header: 'Enkeltbesøk',
			data: { 2020: '4 421 942', 2021: '5 474 120', 2022: '8 491 379' },
		},
		{
			id: 'gruppebesok',
			header: 'Gruppebesøk',
			data: { 2020: '712 351', 2021: '1 011 053', 2022: '1 829 995' },
		}
	];
  const years = Object.keys(tableData[0].data)
  const boldStyle = { fontWeight: 'bold' }

  return (
	<Table caption='Antall besøk og årsverk på museer og samlinger'>
		<TableHead>
			<TableRow>
			<TableCell type='th' colSpan={1} />
			<TableCell type='th' colSpan={years.length} align='center'>
				Antall
			</TableCell>
			</TableRow>
			<TableRow>
			<TableCell type='th'>Museer og samlinger totalt</TableCell>
			{years.map((year) => (
				<TableCell type='th' align='right' key=[key]>
				{year}
				</TableCell>
			))}
			</TableRow>
		</TableHead>
		<TableBody>
			{tableData.map(({ id, header, data, bold }) => (
			<TableRow key={id}>
				<TableCell type='th' scope='row'>
				{header}
				</TableCell>
				{years.map((year) => (
				<TableCell align='right' style={bold ? boldStyle : {}} key=[key]>
					{data[year]}
				</TableCell>
				))}
			</TableRow>
			))}
		</TableBody>
		<TableFooter>
			<TableRow>
			<TableCell type='td' colSpan={years.length + 1}>
				<div>
				<sup>1</sup> Tallet på museer vil variere fra år til år. For eksempel leverer noen museer tall til
				statistikken ett år, men ikke et annet.
				</div>
			</TableCell>
			</TableRow>
		</TableFooter>
	</Table>
  )
}
`;

export const codeHtml = `
<div class="ssb-table-wrapper">
   <table class="ssb-table">
      <caption>
         <div class="caption-wrapper single-line" style="position: relative;">
            <div class="caption-text-wrapper">Antall besøk og årsverk på museer og samlinger</div>
         </div>
      </caption>
      <thead>
         <tr>
            <th class="" colspan="1"></th>
            <th class=" align-center" colspan="3">Antall</th>
         </tr>
         <tr>
            <th class="">Museer og samlinger totalt</th>
            <th class=" align-right">2020</th>
            <th class=" align-right">2021</th>
            <th class=" align-right">2022</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th class="" scope="row">Museer og samlinger totalt</th>
            <td class=" align-right">102</td>
            <td class=" align-right">101</td>
            <td class=" align-right">104</td>
         </tr>
         <tr>
            <th class="" scope="row">Besøk totalt</th>
            <td class=" align-right">5 134 293</td>
            <td class=" align-right">6 485 173</td>
            <td class=" align-right">10 321 374</td>
         </tr>
         <tr>
            <th class="" scope="row">Enkeltbesøk</th>
            <td class=" align-right">4 421 942</td>
            <td class=" align-right">5 474 120</td>
            <td class=" align-right">8 491 379</td>
         </tr>
         <tr>
            <th class="" scope="row">Gruppebesøk</th>
            <td class=" align-right">712 351</td>
            <td class=" align-right">1 011 053</td>
            <td class=" align-right">1 829 995</td>
         </tr>
         <tr>
            <th class="" scope="row">Betalende besøkende</th>
            <td class=" align-right">2 391 962</td>
            <td class=" align-right">2 774 376</td>
            <td class=" align-right">5 654 919</td>
         </tr>
         <tr>
            <th class="" scope="row">Årsverk</th>
            <td class=" align-right"></td>
            <td class=" align-right"></td>
            <td class=" align-right"></td>
         </tr>
         <tr>
            <th class="" scope="row">Lønte</th>
            <td class=" align-right">4173</td>
            <td class=" align-right">4404</td>
            <td class=" align-right">4645</td>
         </tr>
         <tr>
            <th class="" scope="row">Faste stillinger</th>
            <td class=" align-right">3359</td>
            <td class=" align-right">3516</td>
            <td class=" align-right">3683</td>
         </tr>
      </tbody>
      <tfoot>
         <tr>
            <td class="" colspan="4">
               <div><sup>1</sup> Tallet på museer vil variere fra år til år. For eksempel leverer noen museer tall til statistikken ett år, men ikke et annet.</div>
            </td>
         </tr>
      </tfoot>
   </table>
</div>
`;
