import React, { useState } from 'react';
import LeadParagraph from '@atoms/LeadParagraph/LeadParagraph';
import Tabs from '@atoms/Tabs/Tabs';
import Accordion from '@molecules/Accordion/Accordion';
import NestedAccordion from '@molecules/NestedAccordion/NestedAccordion';
import Divider from '@atoms/Divider/Divider';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';

const accordionFillerText = `
This is paragraph text which explains the accordion, the rest of the text is just to fill out space.
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

const codeExamplePrimary = `
<Accordion primary header="This is a primary header">
	{Insert content here}
</Accordion>
`;

const codeExampleSecondary = `
<Accordion header="This is a secondary header">
	{Insert content here}
</Accordion>
`;

const nestedExample = `
<Accordion header="This is a secondary header">
	{Insert content here}
	<NestedAccordion header="A nested accordion header">
		{Insert content here}
	</NestedAccordion>
</Accordion>
`;

const AccordionInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};

	return (
		<div className="col-lg-12">
			<h1>Accordion</h1>
			<LeadParagraph>
				Accordions maximizes efficiency and saves space by expand and collapse sections of content.
				This allows the user to display the content of their choosing, therefore accordion components are always closed by default.
			</LeadParagraph>
			<p>
				It should be noted that accordions should be used sparsely for primary content on a page,
				if the user requires the information on the page it should not be hidden within layers,
				this makes it harder for a user to scan a web page and its content.
				It can also increase cognitive load as it requires users to click every time they want to expand on a topic.
				User might also ignore or not see important information.
			</p>
			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />
			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-12">Primary Accordion</h3>
						<div className="col-lg-6">
							<p>
								Primary accordion are used when the content is important to the understanding of the page and something
								that we want the user to view. By using the primary accordion the emphasis is put on the importance of the content.
							</p>
						</div>
						<div className="col-lg-6">
							<Accordion primary header="This is a primary header">{accordionFillerText}</Accordion>
						</div>
						<div className="col-lg-12 mt-3">
							<CodeSnippet code={codeExamplePrimary} language="jsx" />
						</div>
					</div>
					<Divider light className="mb-4" />
					<div className="row">
						<h3 className="col-lg-12">Secondary Accordion</h3>
						<div className="col-lg-6">
							<p>
								Secondary accordion are used when the content is not necessary for the user in order to understand the page but still
								important information to be available for viewing if needed. This can include authors, definitions,
								background etc and is there to be viewed by the user if they choose to.
							</p>
						</div>
						<div className="col-lg-6">
							<Accordion header="This is a secondary header">{accordionFillerText}</Accordion>
						</div>
						<div className="col-lg-12 mt-3">
							<CodeSnippet code={codeExampleSecondary} language="jsx" />
						</div>
					</div>
					<Divider light className="mb-4" />
					<div className="row">
						<h3 className="col-lg-12">Nested Accordion</h3>
						<div className="col-lg-6">
							<p>
								Nested accordion are used when there are additional nested content within an
								accordion section both primary and secondary, it also functions as a way to organizes
								the content and provides both structure and hierarchy for an easier viewing experience.
							</p>
						</div>
						<div className="col-lg-6">
							<Accordion header="This is a secondary header">
								{accordionFillerText}
								<NestedAccordion header="A nested accordion header">
									{accordionFillerText}
								</NestedAccordion>
							</Accordion>
						</div>
						<div className="col-lg-12 mt-3">
							<CodeSnippet code={nestedExample} language="jsx" />
						</div>
					</div>
				</div>
			)}

			{activeTab === '/rationale' && (
				<div className="mt-3">
					<div className="row mb-3">
						<h3 className="col-lg-4">Primary and Secondary accordions</h3>
						<div className="col-lg-8">
							<span>
								The reason we have two variants of accordion is to create a good hierarchy between the content,
								while both primary and secondary accordions provides valuable information,
								primary accordions contains content that are crucial for user to see in order to
								understand the content on the page. Secondary accordions provide content that are important
								but not crucial for the understanding of the page.
							</span>
						</div>
					</div>

					<div className="row mb-3">
						<h3 className="col-lg-4">Single action accordions</h3>
						<div className="col-lg-8">
							<span>
								There are other accordion elements on other sites that collapse an open accordion when another is opened.
								This feature is not incorporated into our accordions as this behavior can be unpredictable for the users.
								Our user has full control over what type of content they would like to have remain visible.
							</span>
						</div>
					</div>

				</div>
			)}
		</div>
	);
};

export default AccordionInfo;
