import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Input, Divider, LeadParagraph, Paragraph, StickyMenu, Tabs, Text, Title } from '@statisticsnorway/ssb-component-library';
import { ChevronDown, Map, Search } from 'react-feather';

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

const codeReact = `
<StickyMenu>
{/* Insert content here, example below */}
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '25px 0 25px 0' }}>
        <div>
            <Text small>Kommunefakta</Text>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Stordal (Møre og Romsdal)</div>
        </div>
        <div style={{ alignItems: 'center', display: 'flex' }}>
            <div style={{ alignItems: 'center', display: 'flex' }}>
                <label htmlFor="kommune" className="input-header">Bytt kommune:</label>{/* eslint-disable-line */}
                <Input id="kommune" ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
            </div>
            <div style={{ marginLeft: '30px' }} className="choose-chart">Velg i kart</div>
            <ChevronDown size={18} className="chevron-down-icon" />
        </div>
    </div>
</StickyMenu>
`;

const codeHtml = `
<div class="ssb-sticky-menu">
    <div class="menu-content">
    <!-- Insert content here, example below -->
        <div style="display: flex; justify-content: space-between; width: 100%; padding: 25px 0px;">
            <div><span class="ssb-text-wrapper small-text">Kommunefakta</span>
                <div style="font-size: 24px; font-weight: bold;">Stordal (Møre og Romsdal)</div>
            </div>
            <div style="align-items: center; display: flex;">
                <div style="align-items: center; display: flex;">
                    <label for="kommune" class="input-header">Bytt kommune:</label>
                    <div class="ssb-input ">
                        <div class="input-wrapper">
                            <input id="kommune" type="text" placeholder="Søk på kommune" aria-label="Søk på kommune" class=" with-icon" value="">
                            <button class="icon-wrapper search-icon">
                                <i>{feather.search 18px}</i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="choose-chart" style="margin-left: 30px;">Velg i kart</div>
                <i>{feather.chevronDown 18px}</i>
            </div>
        </div>
    </div>
</div>
`;

const codeMobile = `
<StickyMenu>
{/* Insert content here, example Mobile view below */}
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: 'auto', padding: '16px 20px 14px 20px' }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Stordal (Møre og Romsdal)</div>
        <div style={{ display: 'flex' }}>
            <Search size={24} className="chevron-down-icon" style={{ marginRight: '4px', backgroundColor: '#00824d', color: '#ffffff', padding: '4px' }} />
            <Map size={24} className="chevron-down-icon" style={{ padding: '4px' }} />
        </div>
    </div>
    <Divider light />
    <div style={{ width: 'auto', paddingTop: '12px', padding: '12px 20px 20px 20px' }}>
        <div style={{ fontSize: '16px', fontWeight: 'bold', paddingBottom: '8px' }}>Bytt kommune:</div>
        <Input id="kommune" ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
    </div>
</StickyMenu>
`;

const codeMobileHtml = `
<div class="ssb-sticky-menu">
    <div class="menu-content">
    <!-- Insert content here, example Mobile view below -->
        <div style="align-items: center; display: flex; justify-content: space-between; width: auto; padding: 16px 20px 14px;">
            <div style="font-size: 18px; font-weight: bold;">Stordal (Møre og Romsdal)</div>
            <div style="display: flex;">
                <i>{feather.search 24px}</i>
                <i>{feather.map 24px}</i>
            </div>
        </div>
        <hr class="ssb-divider type-light">
        <div style="width: auto; padding: 12px 20px 20px;">
            <div style="font-size: 16px; font-weight: bold; padding-bottom: 8px;">Bytt kommune:</div>
            <div class="ssb-input ">
                <div class="input-wrapper">
                    <input id="kommune" type="text" placeholder="Søk på kommune" aria-label="Søk på kommune" class=" with-icon" value="">
                    <button class="icon-wrapper search-icon">
                        <i>{feather.search 18px}</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const StickyMenuInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
	const tabClicked = e => changeTab(e);
	const tabCodeClicked = e => changeCodeTab(e);

	return (
		<div className="col-lg-12">
			<Title size={1}>Sticky menu</Title>
			<LeadParagraph>
				The top local navigation is a sticky navigation element used for longer content that allows for fast access to different navigation options at all times,
				both within the page and switching to other relevant pages, this can be done by using either dropdown boxes or search boxes.
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider className="mb-4" />

			{activeTab === '/oversikt' && (
				<div>
					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Sticky menu</Title>
						<div className="col-lg col-md-12">
							<Paragraph className="mb-4">
								This navigation element always has the page name visible to the left of the row in order to provide a clear indication of what page the user is currently viewing.
								As for the navigation options, there is a menu header that describes what type of content the user can be expected to view.
								Underneath the menu header is a sub-header which displays which item is currently selected. When clicked an expandable column appears with a list of selectable items.
								The selected item will be shown with a dark green background while a new item when hovered over becomes light green to indicate click-ability.
							</Paragraph>
						</div>
						<div className="component-example col-lg-12">
							<StickyMenu>
								<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '25px 20px 25px 20px' }}>
									<div>
										<Text small>Kommunefakta</Text>
										<div style={{ fontSize: '24px', fontWeight: 'bold' }}>Stordal (Møre og Romsdal)</div>
									</div>
									<div style={{ alignItems: 'center', display: 'flex' }}>
										<div style={{ alignItems: 'center', display: 'flex' }}>
											<label htmlFor="kommune" className="input-header">Bytt kommune:</label>{/* eslint-disable-line */}
											<Input id="kommune" ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
										</div>
										<div style={{ marginLeft: '30px' }} className="choose-chart">Velg i kart</div>
										<ChevronDown size={18} className="chevron-down-icon" />
									</div>
								</div>
							</StickyMenu>
						</div>
						<div className="col-lg-12 mt-4">
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
						</div>
					</div>

					<Divider light className="mb-4" />

					<div className="row mb-4">
						<Title size={2} className="col-lg-12">Sticky menu Mobile</Title>
						<div className="col-lg col-md-12">
							<Paragraph className="mb-4">
								Mobil visning
							</Paragraph>
						</div>
						<div className="component-example col-lg col-md-12 p-0">
							<StickyMenu>
								<div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', width: 'auto', padding: '16px 20px 14px 20px' }}>
									<div style={{ fontSize: '18px', fontWeight: 'bold' }}>Stordal (Møre og Romsdal)</div>
									<div style={{ display: 'flex' }}>
										<Search size={24} className="chevron-down-icon" style={{ marginRight: '4px', backgroundColor: '#00824d', color: '#ffffff', padding: '4px' }} />
										<Map size={24} className="chevron-down-icon" style={{ padding: '4px' }} />
									</div>
								</div>
								<Divider light />
								<div style={{ width: 'auto', paddingTop: '12px', padding: '12px 20px 20px 20px' }}>
									<div style={{ fontSize: '16px', fontWeight: 'bold', paddingBottom: '8px' }}>Bytt kommune:</div>
									<Input id="kommune" ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
								</div>
							</StickyMenu>
						</div>
						<div>
							<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
							<Divider light />
							{activeCodeTab === '/react' && <CodeSnippet code={codeMobile} language="jsx" />}
							{activeCodeTab === '/html' && <CodeSnippet code={codeMobileHtml} language="html" />}
						</div>
					</div>

				</div>
			)}

			{activeTab === '/props' && (
				<div>
					<Title size={2} className="mb-4">Props</Title>
					<table className="col-lg-12">
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
								<td>Required node</td>
								<td>Content within the wrapper</td>
							</tr>
							<tr>
								<td><code>className</code></td>
								<td>string</td>
								<td>Optional container class</td>
							</tr>
						</tbody>
					</table>
				</div>
			)}

		</div>
	);
};

export default StickyMenuInfo;
