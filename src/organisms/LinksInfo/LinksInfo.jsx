import React, { useState } from 'react';
import { ArrowRight } from 'react-feather';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Divider from '@atoms/Divider/Divider';
import Link from '@atoms/Link/Link';

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

const LinksInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	return (
		<div className="col-lg-12">
			<h1>Links</h1>
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
						<h3 className="col-lg-12">Link</h3>
						<div className="col-lg-6">
							<p>
								Regular links can be used both in a paragraph and as a standalone
								link that can be used to direct the user to another page when clicked.
							</p>
						</div>
						<div className="col-lg-6">
							<Link href=" ">Link text</Link>
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-12">Links with icons</h3>
						<div className="col-lg-6">
							<p>
								Links with icons are usually not normally used in a paragraph but rather as a standalone
								link to indicate functionality. But it can also be used together with other links with
								icons to differentiate and indicate different functionalities.
							</p>
						</div>
						<div className="col-lg-6">
							<Link href=" " icon={<ArrowRight size="20" />}>Link text</Link>
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-12">Profiled links with and without icon</h3>
						<div className="col-lg-6">
							<p>
								Profiled links are used to emphasis on hierarchy and can be used in combination with the
								other types of links to display prominence.
							</p>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-6">
								<Link href=" " linkType="profiled">Link text</Link>
							</div>
							<div className="col-lg-6">
								<Link href=" " linkType="profiled" icon={<ArrowRight size="20" />}>Link text</Link>
							</div>
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
