import React from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { Divider, LeadParagraph, Paragraph, Title } from '@statisticsnorway/ssb-component-library';

const codeExample = `
<Divider dark />
<Divider light />
`;

const DividerInfo = () => (
	<div className="col-lg-12">
		<Title size={1}>Divider</Title>
		<LeadParagraph>
			Divider is an element used to draw horizontal lines between different content groupings,
			used mostly on open pages that have lots of different components present, i.e. front page,
			article page, statistic page etc.
		</LeadParagraph>

		<Divider />

		<div className="mt-3">
			<div className="row mb-3">
				<Title size={3} className="col-lg-12">Divider</Title>
				<div className="col-lg-6">
					<Paragraph>
						The divider element is always place at the end of a content grouping and before the start of the next new grouping.
					</Paragraph>
				</div>
				<div className="col-lg-6">
					<div className="mb-3"><Divider dark /></div>
					<Divider light />
				</div>
				<div className="col-lg-6">
					<CodeSnippet code={codeExample} language="jsx" />
				</div>
			</div>
		</div>
	</div>
);

export default DividerInfo;
