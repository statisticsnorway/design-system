import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Input, Divider, LeadParagraph, Paragraph, StickyMenu, Tabs, Title } from '@statisticsnorway/ssb-component-library';
import { ChevronDown } from 'react-feather';

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
    <div className="container">
        <div className="row align-items-center">
            <div className="column col-md-12 col-lg-5">
                <div className="col-12">
                    <div className="subtitle">Kommunefakta</div>
                    <div className="title">Stordal (Møre og Romsdal)</div>
                </div>
            </div>
            <div className="column col-md-6  col-lg-5">
                <div className="col-flex flex-row align-items-center">
                    <div className="input-header">Bytt kommune:</div>
                    <div className="w-100">
                        <Input ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
                    </div>
                </div>
            </div>
            <div className="column col-md-6 col-lg-2">
                <div className="choose-chart">Velg i kart</div>
                <ChevronDown className="chevron-down-icon" size={18} />
            </div>
        </div>
    </div>    
</StickyMenu>
`;

const codeHtml = `
<div class="ssb-sticky-menu">
    <div class="menu-content">
    <!-- Suggested content -->
        <div style="display: flex; justify-content: space-between; width: 100%;">
            <div>
                <span class="ssb-text-wrapper small-text">Kommunefakta</span>
                <div style="font-size: 24px; font-weight: bold;">Stordal (Møre og Romsdal)</div>
            </div>
            <div style="align-items: center; display: flex;">
                <div style="align-items: center; display: flex;">
                    <label for="kommune" class="input-header">Bytt kommune:</label>
                    <div class="ssb-input">
                        <div class="input-wrapper">
                            <input id="kommune" type="text" placeholder="Søk på kommune" aria-label="Søk på kommune" class=" with-icon" value="" />
                            <button class="icon-wrapper search-icon"><i>{feather.search 18px}</i></button>
                        </div>
                    </div>
                </div>
                <div class="choose-chart" style="margin-left: 30px;">Velg i kart</div>
                {feather.chevronDown 18px}
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
					<Title size={2}>Sticky menu</Title>
					<Paragraph className="mb-4">
						This navigation element always has the page name visible to the left of the row in order to provide a clear indication of what page the user is currently viewing.
						As for the navigation options, there is a menu header that describes what type of content the user can be expected to view.
						Underneath the menu header is a sub-header which displays which item is currently selected. When clicked an expandable column appears with a list of selectable items.
						The selected item will be shown with a dark green background while a new item when hovered over becomes light green to indicate click-ability.
					</Paragraph>
					<div className="mb-4">
						<StickyMenu>
							<div className="container">
								<div className="row align-items-center">
									<div className="column col-md-12 col-lg-5">
										<div className="col-12">
											<div className="subtitle">Kommunefakta</div>
											<div className="title">Stordal (Møre og Romsdal)</div>
										</div>
									</div>
									<div className="column col-md-6  col-lg-5">
										<div className="col-flex flex-row align-items-center">
											<div className="input-header">Bytt kommune:</div>
											<div className="w-100">
												<Input ariaLabel="Søk på kommune" searchField placeholder="Søk på kommune" />
											</div>
										</div>
									</div>
									<div className="column col-md-6 col-lg-2">
										<div className="choose-chart">Velg i kart</div><ChevronDown className="chevron-down-icon" size={18} />
									</div>
								</div>
							</div>
						</StickyMenu>
					</div>
					<div>
						<Tabs activeOnInit={tabCode[0].path} items={tabCode} onClick={tabCodeClicked} />
						<Divider light />
						{activeCodeTab === '/react' && <CodeSnippet code={codeReact} language="jsx" />}
						{activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language="html" />}
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
						</tbody>
					</table>
				</div>
			)}

		</div>
	);
};

export default StickyMenuInfo;
