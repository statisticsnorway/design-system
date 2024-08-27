import React, { useState } from "react";
import "../../../style/_table.scss";
import CodeSnippet from "@components/CodeSnippet/CodeSnippet";
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
  Link,
  Text,
} from "@statisticsnorway/ssb-component-library";

const tabItems = [
  {
    title: "Oversikt",
    path: "/overview",
  },
  {
    title: "Begrunnelse",
    path: "/rationale",
  },
  {
    title: "Props",
    path: "/props",
  },
];

const tabCode = [
  {
    title: "React",
    path: "/react",
  },
  {
    title: "Html",
    path: "/html",
  },
];

const codeReact = `
<FactBox
	header="This is a header" 
	text="This is paragraph text which explains the accordion"
/>
`;

const codeHtml = `
<div class="ssb-fact-box">
	<div class="ssb-accordion without-borders">
		<button class="accordion-header closed" aria-expanded="false"  onclick="{toggle classname to 'open' and aria-expanded to 'true'} tabindex="0">
			<span class="button-grid">
				<span class="header-text">This is a fact box header</span>
				{20px ChevronDown icon, add class="expand-icon" }
			</span>
		</button>
		<div class="accordion-body closed">
			{insert content}
		</div>
	</div>
</div>
`;

const overviewText = `
Tabellkomponenten er responsiv og brukervennlig.
Støtte for navigasjon via knapper og horisontal rulling. Når tabellen har mer innhold enn skjermen kan vise, aktiveres rullefunksjonen automatisk. Brukeren kan enkelt navigere med piltastene, slik at all informasjon er tilgjengelig, selv på mindre skjermer.
`;

export const Statistics = () => (
  <div style={{ padding: "4rem" }}>
    <SSBTable caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pretium felis. Aenean eu ipsum in magna auctor porta. Donec vestibulum nulla vel laoreet blandit.">
      <TableHead>
        <TableRow>
          <TableCell type="th" rowSpan={2} align="right">
            2020
          </TableCell>
          <TableCell type="th" colSpan={2} scope="colgroup">
            Second level
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell type="th" scope="col" align="right">
            First level
          </TableCell>
          <TableCell type="th" scope="col" align="right">
            First level<sup>1</sup>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell type="th" scope="row">
            Total (with numbers)
          </TableCell>
          <TableCell align="right">1 000</TableCell>
          <TableCell align="right">2 000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell type="th" scope="row" indentationLevel={1}>
            First level
          </TableCell>
          <TableCell align="right">50</TableCell>
          <TableCell align="right">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell type="th" scope="row" indentationLevel={2}>
            Second level
          </TableCell>
          <TableCell align="right">200</TableCell>
          <TableCell align="right">650</TableCell>
        </TableRow>
        <TableRow>
          <TableCell type="th" scope="row" indentationLevel={3}>
            Third level
          </TableCell>
          <TableCell align="right">500</TableCell>
          <TableCell align="right">200</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell type="td" colSpan={3}>
            <div>
              <sup>1</sup> Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Mauris lacinia massa ut velit pulvinar, a ullamcorper odio
              pulvinar. Nulla vulputate congue justo a bibendum. Maecenas
              aliquet volutpat urna ac bibendum. Morbi at pharetra massa. Sed
              ornare diam eleifend, semper ipsum sed, feugiat purus.
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell type="td" colSpan={3}>
            <sup>2</sup> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Cras non pretium felis.
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell type="td" colSpan={3}>
            <sup>3</sup> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </TableCell>
        </TableRow>
      </TableFooter>
    </SSBTable>
  </div>
);

const TableInfo = () => {
  const [activeTab, changeTab] = useState(tabItems[0].path);
  const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);

  const tabClicked = (newTabPath) => changeTab(newTabPath);
  const tabCodeClicked = (newTabPath) => changeCodeTab(newTabPath);

  return (
    <div className="col-lg-12">
      <Title size={1}>Table</Title>
      <LeadParagraph>
        Table er en komponent som brukes til å vise statistikk. Den har et
        responsivt design som gjør at tabelldata kan leses på alle plattformer.
      </LeadParagraph>
      <Tabs
        activeOnInit={tabItems[0].path}
        items={tabItems}
        onClick={tabClicked}
      />

      <Divider className="mb-4" />

      {activeTab === "/overview" && (
        <div className="row mb-4">
          <Title size={2} className="col-lg-12">
            Tabell
          </Title>
          <div className="col-lg col-md-12">
            <p>{overviewText}</p>
          </div>
          <div className="col-lg col-md-12">
            <Statistics />
          </div>
          <div className="component-example col-lg col-md-12 divider-left"></div>
          <div className="col-lg-12">
            <Tabs
              activeOnInit={tabCode[0].path}
              items={tabCode}
              onClick={tabCodeClicked}
            />
            <Divider light />
            {activeCodeTab === "/react" && (
              <CodeSnippet code={codeReact} language="jsx" />
            )}
            {activeCodeTab === "/html" && (
              <CodeSnippet code={codeHtml} language="html" />
            )}
          </div>
        </div>
      )}

      {activeTab === "/props" && (
        <div>
          <div className="row col-lg-12">
            <Title size={2}>Props</Title>
            <table className="col-lg-12 mb-4">
              <thead style={{ textAlign: "left" }}>
                <tr>
                  <th>
                    <Title size={3}>Prop name</Title>
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
                  <td style={{ paddingLeft: "20px" }}>
                    <code>className</code>
                  </td>
                  <td>string</td>
                  <td>Optional container class</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>children</code>
                  </td>
                  <td>ReactNode</td>
                  <td>Content to be displayed within the component</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>caption</code>
                  </td>
                  <td>string</td>
                  <td>Optional caption for the table</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>dataNoteRefs</code>
                  </td>
                  <td>string</td>
                  <td>References to data notes</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>id</code>
                  </td>
                  <td>string</td>
                  <td>Unique identifier for the table cell</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>className</code>
                  </td>
                  <td>string</td>
                  <td>Optional container class</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>type</code>
                  </td>
                  <td>'th' | 'td'</td>
                  <td>
                    Specifies whether the cell is a header or standard cell
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>rowSpan</code>
                  </td>
                  <td>number</td>
                  <td>Number of rows the cell should span</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>colSpan</code>
                  </td>
                  <td>number</td>
                  <td>Number of columns the cell should span</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>headers</code>
                  </td>
                  <td>string</td>
                  <td>IDs of header cells this cell is related to</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>scope</code>
                  </td>
                  <td>'col' | 'colgroup' | 'row' | 'rowgroup'</td>
                  <td>Specifies the scope of the header cell</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>align</code>
                  </td>
                  <td>'left' | 'center' | 'right'</td>
                  <td>Text alignment within the cell</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
                    <code>indentationLevel</code>
                  </td>
                  <td>'1' | '2' | '3'</td>
                  <td>Specifies the level of indentation</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px" }}>
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
