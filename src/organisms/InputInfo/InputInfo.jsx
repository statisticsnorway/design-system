import React, { useState } from 'react';
import CodeSnippet from '@atoms/CodeSnippet/CodeSnippet';
import { Divider, Input, LeadParagraph, Paragraph, Tabs, Title } from '@statisticsnorway/ssb-component-library/lib';

const tabItems = [
	{
		title: 'Overview',
		path: '/overview',
	}, {
		title: 'Rationale',
		path: '/rationale',
	},
];

const InputInfo = () => {
	const [activeTab, changeTab] = useState(tabItems[0].path);
	const tabClicked = e => {
		changeTab(e);
	};
	return (
		<div className="col-lg-12">
			<Title size={1}>Input</Title>
			<LeadParagraph>
				Input forms are an input element that allows the user to interact and input data into.
				Label text should be used to tell the user what kind of data the input form is looking for
				and should be short and concise and written in plain language.
			</LeadParagraph>

			<Tabs activeOnInit={tabItems[0].path} items={tabItems} onClick={tabClicked} />
			<Divider />

			{activeTab === '/overview' && (
				<div className="mt-3">
					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Input</Title>
						<div className="col-lg-6">
							<Paragraph>
								Input forms contains 3 different state: un-clicked, hover and clicked.
								When un-clicked the form is outlined by a grey rectangle outline.
								When hovered, this rectangle outline turns into green.
								When clicked by the user the blinking line indicates that it is ready for typing.
							</Paragraph>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-7">
								<Input />
							</div>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={'<Input value={someValue} handleChange={handleChange} />'} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Input error</Title>
						<div className="col-lg-6">
							<Paragraph>
								When an error occurs in the input form, the select form will change into a error state where the
								input form will change its border into a thicker border and color into red.
								At the right side of the input form an error icon will be displayed.
								Underneath the form an error message will be displayed in order to explain how to fix the error.
							</Paragraph>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-7">
								<Input error errorMessage="Her gikk det galt" />
							</div>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={'<Input error errorMessage="Her gikk det galt" />'} language="jsx" />
						</div>
					</div>

					<div className="row mb-3">
						<Title size={3} className="col-lg-12">Search</Title>
						<div className="col-lg-6">
							<Paragraph>
								Search form are an input element that combines an input form and a clickable search icon to allow
								the user to search for specific word or phrases by inputting the data into the search form.
							</Paragraph>
						</div>
						<div className="col-lg-6 row">
							<div className="col-lg-7">
								<Input searchField />
							</div>
						</div>
						<div className="col-lg-12">
							<CodeSnippet code={'<Input searchField submitCallback={handleSubmit} />'} language="jsx" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default InputInfo;
