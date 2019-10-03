import React, { useState } from 'react';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Divider from '@atoms/Divider/Divider';
import Breadcrumb from '@molecules/Breadcrumb/Breadcrumb';

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	},
];

const mockedItems = [
	{
		link: ' ',
		text: 'breadcrumb 1',
	},
	{
		link: ' ',
		text: 'breadcrumb 2',
	},
	{
		text: 'breadcrumb 3',
	},
];

const BreadcrumbInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<h1>Breadcrumb</h1>
			<LeadParagraph>
				Breadcrumbs are a navigational aid used to provide the user with the information of their location
				on the website through a combination of links that is placed underneath the top header and at the top of a new page.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-12">Breadcrumbs</h3>
						<div className="col-lg-6">
							<p>
								Through breadcrumbs users can see where they are in the website hierarchy and by following the links to previous
								sections it also provides simple navigations to prior level/content.
							</p>
						</div>
						<div className="col-lg-6">
							<Breadcrumb items={mockedItems} />
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={'<Breadcrumb items={items} />'} language="jsx" />
						</div>
					</div>

					<Divider />

					<div className="row">
						<h3 className="col-lg-12 mt-3 mb-3">Props</h3>
						<table className="col-lg-12">
							<thead style={{ textAlign: 'left' }}>
								<tr>
									<th><h5>Prop name</h5></th>
									<th><h5>Type</h5></th>
									<th><h5>Description</h5></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><code>items</code></td>
									<td>array of objects</td>
									<td>A list of objects. Object key <code>text</code> is required, <code>link</code> is optional.</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-5">Location based breadcrumbs</h3>
						<div className="col-lg-7">
							<p>
								We have opted for a location based breadcrumbs as it gives the user a good overview of where in the website
								hierarchy they are currently in, instead of path based breadcrumb which only show the path that the user have browsed.
							</p>
						</div>
					</div>
					<div className="row mb-3">
						<h3 className="col-lg-5">Simplistic design</h3>
						<div className="col-lg-7">
							<p>
								As breadcrumbs are a secondary navigation, the overall design of breadcrumbs has been kept at a very simplistic level
								to avoid it being too prominent or confused for being a main navigational element.
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default BreadcrumbInfo;
