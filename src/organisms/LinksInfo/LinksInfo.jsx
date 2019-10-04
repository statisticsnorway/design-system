import React, { useState } from 'react';
import { ArrowRight } from 'react-feather';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Divider from '@atoms/Divider/Divider';
import Link from '@atoms/Link/Link';
import Title from '@atoms/Title/Title';
import Paragraph from '@atoms/Paragraph/Paragraph';

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	}, {
		title: 'Accessibility',
		path: '/accessibility',
	},
];

const profiledLinks = `
<Link href=" " linkType="profiled">Link text</Link>
<Link
	href=" "
	linkType="profiled"
	icon={<ArrowRight size="20" />}
>Link text
</Link>
`;

const LinksInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	return (
		<div className="col-lg-12">
			<Title size={1}>Links</Title>
			<LeadParagraph>
				Link component is styled to resemble a hyperlink to show user that this is a link to another page.
				It follows the styling of a paragraph text but is underlined and has a different color.
				Links can also be used in different formats, this includes: link lists, in-lined links and links with icons.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />
			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Link</Title>
						<div className="col-lg-6">
							<Paragraph>
								Regular links can be used both in a paragraph and as a standalone
								link that can be used to direct the user to another page when clicked.
							</Paragraph>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-6">
								<Link href=" ">Link text</Link>
							</div>
							<div className="col-lg-6">
								<Link href=" " negative>Link text</Link>
							</div>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={'<Link href=" ">Link text</Link>'} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Links with icons</Title>
						<div className="col-lg-6">
							<Paragraph>
								Links with icons are usually not normally used in a paragraph but rather as a standalone
								link to indicate functionality. But it can also be used together with other links with
								icons to differentiate and indicate different functionalities.
							</Paragraph>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-6">
								<Link href=" " icon={<ArrowRight size="20" />}>Link text</Link>
							</div>
							<div className="col-lg-6">
								<Link negative href=" " icon={<ArrowRight size="20" />}>Link text</Link>
							</div>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={'<Link href=" " icon={<ArrowRight size="20" />}>Link text</Link>'} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Profiled links with and without icon</Title>
						<div className="col-lg-6">
							<Paragraph>
								Profiled links are used to emphasis on hierarchy and can be used in combination with the
								other types of links to display prominence.
							</Paragraph>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-6">
								<Link href=" " linkType="profiled">Link text</Link><br />
								<Link negative href=" " linkType="profiled">Link text</Link>
							</div>
							<div className="col-lg-6">
								<Link href=" " linkType="profiled" icon={<ArrowRight size="20" />}>Link text</Link><br />
								<Link negative href=" " linkType="profiled" icon={<ArrowRight size="20" />}>Link text</Link>
							</div>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={profiledLinks} language="jsx" />
						</div>
					</div>
					<Divider />
					<div className="row">
						<Title size={3} className="col-lg-12 mt-3 mb-3">Props</Title>
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
									<td><code>children</code></td>
									<td>node</td>
									<td>Required. Something that renders to wrap the link around</td>
								</tr>
								<tr>
									<td><code>href</code></td>
									<td>string</td>
									<td>Required. Destination for navigation</td>
								</tr>
								<tr>
									<td><code>icon</code></td>
									<td>node</td>
									<td>Renders an icon</td>
								</tr>
								<tr>
									<td><code>isExternal</code></td>
									<td>bool</td>
									<td>Will make the link open in new tab. Defaults to <code>false</code></td>
								</tr>
								<tr>
									<td><code>linkType</code></td>
									<td>string</td>
									<td>
										Changes the style. Can be &apos;regular&apos;, &apos;profiled&apos;, or &apos;header&apos;.
										Defaults to &apos;regular&apos;.
									</td>
								</tr>
								<tr>
									<td><code>negative</code></td>
									<td>bool</td>
									<td>Will change component style. Defaults to <code>false</code></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Color</Title>
						<div className="col-lg-6">
							<Paragraph>
								The chosen color for links is SSB green 4, the reason behind this choice is to fit the theme
								of the overall design system and at the same time teaching the user about green being a clickable
								component on our site as the majority of all clickable items are green.
							</Paragraph>
						</div>
					</div>
				</div>
			)}

		</div>
	);
};

LinksInfo.defaultProps = {};

LinksInfo.propTypes = {};

export default LinksInfo;
