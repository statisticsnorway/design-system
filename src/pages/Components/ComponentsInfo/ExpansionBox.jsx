import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Sun } from 'react-feather';
import { ExpansionBox, Divider, LeadParagraph, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';

const leadParagraphText = `
Expansion box har 3 varianter; “standard”, “sneak peek” og “icon”. Trenger mer tekst her  
`;

const overviewTextExpansionBoxStandard = `
Expansion box har tre visningsmodus. Lukket, åpen og sneak peek. Når boksen er lukket skal den ha en informativ tittel som forteller brukeren hva innholdet i den vil være. 
Da vil brukeren kunne forvente hva som vises når boksen åpnes.
`;

const overviewTextExpansionBoxSneakPeek = `
Expansion box med sneak peek vil vise starten av innholdet.
`;

const overviewTextExpansionBoxIcon = `
Expansion box med ikon vil vise ikon til venstre for tittelen.
`;

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

const exampleContentSneakPeek = (
	<div>
		<Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non sem nec odio posuere porta sit amet porta turpis. Morbi eu convallis purus.
			Proin eget quam ante. Ut malesuada, elit vel fringilla laoreet, est nisi viverra ligula, eu aliquet ante est quis lorem. Nunc porta ipsum ac mi sagittis,
			a vulputate ligula tincidunt. Nulla facilisi. Sed consectetur, nulla vel placerat elementum, augue eros ultricies odio, at condimentum dolor enim et nunc.
			Cras posuere, justo eu semper laoreet, purus elit hendrerit mauris, vel aliquam arcu risus eu augue.
		</Text>
		<Title size={3}>Liste</Title>
		<ul>
			<li>Lorem ipsum 1</li>
			<li>Lorem ipsum 2</li>
			<li>Lorem ipsum 3</li>
		</ul>
		<Text>
			Donec nec nisl porta, imperdiet sapien vel, auctor sem. In non leo rhoncus, finibus metus quis, consectetur diam. Integer ut sagittis velit. Quisque eget porta lacus.
			Fusce nec egestas est. Cras venenatis sem eu ante finibus volutpat. Donec tempor eget leo ut maximus. Nunc odio ante, tincidunt at lacus vel, gravida sollicitudin arcu.
			Vivamus ante odio, consectetur ut dolor nec, fringilla interdum nulla. Duis dapibus est ut tortor dictum vestibulum. Pellentesque dapibus ultricies diam, in suscipit dui ornare sit amet.
		</Text>
	</div>
);

const codeStandardReact = `
<ExpansionBox
	header="Expansion box header text" 
	text={insert content or text}
/>
`;

const codeStandardHtml = `
<div class='ssb-expansion-box'>
  <button aria-expanded='false' class='header'>
    <span class='header-text'>This is a ExpansionBox title</span>
    <div class='icon-wrapper'>
      <i class="expand-icon">{feather.chevronDown 20px}</i>
    </div>
  </button>
  <div class='content closed'>{insert content}</div>
</div>
`;

const codeSneakPeakReact = `
<ExpansionBox 
	header='ExpansionBox with icon and sneakpeek text' 
	text='This is paragraph text which explains the expansionBox' 
	sneakPeek />
`;

const codeSneakPeakHtml = `
<div class="ssb-expansion-box sneak-peek">
   <button class="header" aria-expanded="false">
      <span class="header-text">ExpansionBox with icon and sneakpeek content</span>
      <div class="icon-wrapper">
         <i class="expand-icon">{feather.chevronDown 20px}</i>
      </div>
   </button>
   <div class="content closed">
      {content}
   </div>
</div>
`;

const codeIconReact = `
<ExpansionBox 
	header='ExpansionBox with icon and sneakpeek' 
	text='This is paragraph text which explains the expansionBox' 
	icon={<Sun size={32} />} sneakPeek />
`;

const codeIconHtml = `
<div class="ssb-expansion-box sneak-peek">
   <button class="header" aria-expanded="false">
      <div class="icon">
        <i>{feather.sun 32px}</i>
      </div>
      <span class="header-text">ExpansionBox with icon and sneakpeek content</span>
      <div class="icon-wrapper">
         <i class="expand-icon">{feather.chevronDown 20px}</i>
      </div>
   </button>
   <div class="content closed">
      {content}
   </div>
</div>
`;

const ExpansionBoxInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Expansion box</Title>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Exspansion box</Title>
						<div className="col-lg col-md-12 mb-4">
							<p>{overviewTextExpansionBoxStandard}</p>
						</div>
						<Divider light />
						<div className="component-example col-12 mt-4" style={{ width: '750px' }}>
							<ExpansionBox header="This is an expansion box" text={exampleContentSneakPeek} />
						</div>
						<div className="col-lg-12">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeStandardReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeStandardHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Exspansion box with Sneak Peek</Title>
						<div className="col-lg col-12 mb-4">
							{overviewTextExpansionBoxSneakPeek}
						</div>
						<Divider light />
						<div className="component-example col-12 mt-4" style={{ width: '750px' }}>
							<ExpansionBox
								header="This is an expansion box-sneak peek"
								text={exampleContentSneakPeek}
								sneakPeek
							/>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeSneakPeakReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeSneakPeakHtml} language="html" />}
						</div>
					</div>

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Exspansion box with icon</Title>
						<div className="col-lg col-12  mb-4">
							{overviewTextExpansionBoxIcon}
						</div>
						<Divider light />
						<div className="component-example col-12 mt-4" style={{ width: '750px' }}>
							<ExpansionBox
								header="This is an expansion box-icon"
								text={exampleContentSneakPeek}
								sneakPeek
								icon={<Sun size={32} />}
							/>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeIconReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeIconHtml} language="html" />}
						</div>
					</div>
				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<div className="row col-lg-12 ">
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
									<td><code>className</code></td>
									<td>string</td>
									<td>Optional container class</td>
								</tr>
								<tr>
									<td><code>header</code></td>
									<td>string</td>
									<td>Header text</td>
								</tr>
								<tr>
									<td><code>icon</code></td>
									<td>node</td>
									<td>Renders an icon to the left of header text</td>
								</tr>
								<tr>
									<td><code>sneakPeek</code></td>
									<td>bool</td>
									<td>Show a sneakpeek of the text. Defaults to false</td>
								</tr>
								<tr>
									<td><code>openByDefault</code></td>
									<td>bool</td>
									<td>Open when rendered. Defaults to false</td>
								</tr>
								<tr>
									<td><code>text</code></td>
									<td>string or element</td>
									<td>Content in expansion box</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	);
};

export default ExpansionBoxInfo;
