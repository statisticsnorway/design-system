import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Accordion from '@molecules/Accordion/Accordion';
import Divider from '@atoms/Divider/Divider';

const leadParagraphText = `
Accordions maximizes efficiency and saves space by expand and collapse sections of content.
This allows the user to display the content of their choosing,
therefore accordion components are always closed by default.
`;

const accordionFillerText = `
This is paragraph text which explains the accordion, the rest of the text is just to fill it out and show the space it takes.
`;

const primaryAccordionText = `
Primary accordion are used when the content is important to the understanding of the page and something that we want the user to view.
By using the primary accordion the emphasis is put on the importance of the content.
`;

const secondaryAccordionText = `
Secondary accordion are used when the content is not necessary for the user in order to understand the page but still 
important information to be available for viewing if needed. This can include authors, definitions,
 background etc and is there to be viewed by the user if they choose to.
`;

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

const AccordionInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<h1>Accordion</h1>
			<LeadParagraph>
				{leadParagraphText}
			</LeadParagraph>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />
			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-12">Primary Accordion</h3>
						<div className="col-lg-6">
							<p>{primaryAccordionText}</p>
						</div>
						<div className="col-lg-6">
							<Accordion primary header="This is a primary header">{accordionFillerText}</Accordion>
						</div>
					</div>
					<Divider light className="mb-4" />
					<div className="row">
						<h3 className="col-lg-12">Secondary Accordion</h3>
						<div className="col-lg-6">
							<p>
								{secondaryAccordionText}
							</p>
						</div>
						<div className="col-lg-6">
							<Accordion header="This is a secondary header">{accordionFillerText}</Accordion>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

AccordionInfo.defaultProps = {};

AccordionInfo.propTypes = {};

export default AccordionInfo;
