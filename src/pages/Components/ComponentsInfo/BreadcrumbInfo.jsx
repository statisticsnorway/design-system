import React, { useState } from 'react';
import CodeSnippet from '@components/CodeSnippet/CodeSnippet';
import { ArrowLeft } from 'react-feather';
import {
  Breadcrumb,
  Divider,
  LeadParagraph,
  Link,
  Paragraph,
  Tabs,
  Text,
  Title,
} from '@statisticsnorway/ssb-component-library';

const tabItems = [
  {
    title: 'Oversikt',
    path: '/overview',
  },
  {
    title: 'Begrunnelse',
    path: '/rationale',
  },
  {
    title: 'Props',
    path: '/props',
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

const tabCode = [
  {
    title: 'React',
    path: '/react',
  },
  {
    title: 'Html',
    path: '/html',
  },
];

const tabCodeReactOnly = [
  {
    title: 'React',
    path: '/react',
  },
];

const codeExample = `
<Breadcrumb items={items} />
`;

const codeExampleHtml = `
<div class='ssb-breadcrumbs'>
    <div>
        <a class='ssb-link' href=' '>
            <span class='link-text'>breadcrumb 1</span>
        </a>
        &nbsp;/&nbsp;
    </div>
    <div>
        <a class='ssb-link' href=' '>
            <span class='link-text'>breadcrumb 2</span>
        </a>&nbsp;/&nbsp;
    </div>
    <span>breadcrumb 3</span>
</div>
`;

const mobileCompressedViewExample = `
<Breadcrumb mobileCompressedView={true} items={items} />
`;

const BreadcrumbInfo = () => {
  const [activeTab, changeTab] = useState(tabItems[0].path);
  const tabClicked = (e) => changeTab(e);
  const [activeCodeTab, changeCodeTab] = useState(tabCode[0].path);
  const tabCodeClicked = (e) => changeCodeTab(e);

  return (
    <div className='col-lg-12'>
      <Title size={1}>Breadcrumb</Title>
      <LeadParagraph>
        Brødsmuler er en navigasjonshjelp som gir brukeren informasjon om hvor
        de befinner seg på nettstedet, ved en kombinasjon av lenker som er
        plassert under toppfeltet på en side.
      </LeadParagraph>

      <Tabs
        activeOnInit={tabItems[0].path}
        items={tabItems}
        onClick={tabClicked}
      />
      <Divider className='mb-4' />

      {activeTab === '/overview' && (
        <>
          <div className='row mb-4'>
            <Title size={2} className='col-lg-12'>
              Brødsmuler
            </Title>
            <div className='col-lg col-md-12'>
              <Paragraph>
                Brødsmulene hjelper brukeren å se hvor de befinner seg på
                nettstedet. Ved å følge lenkene til tidligere sider/nivåer, vil
                brødsmulene fungere som en enkel navigasjon til foregående sider
                og innhold.
              </Paragraph>
            </div>
            <div className='component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center'>
              <Breadcrumb items={mockedItems} />
            </div>
            <div className='col-lg-12'>
              <Tabs
                activeOnInit={tabCode[0].path}
                items={tabCode}
                onClick={tabCodeClicked}
              />
              <Divider light />
              {activeCodeTab === '/react' && (
                <CodeSnippet code={codeExample} language='jsx' />
              )}
              {activeCodeTab === '/html' && (
                <CodeSnippet code={codeExampleHtml} language='html' />
              )}
            </div>

            <Divider light className='mb-4' />

            <div className='row mb-4'>
              <Title size={2} className='col-lg-12'>
                Brødsmuler
              </Title>
              <div className='col-lg col-md-12'>
                <Paragraph>
                  The mobileCompressedView shows a compact breadcrumb on mobile,
                  displaying the second-to-last item with a left arrow.
                </Paragraph>
              </div>
              <div className='component-example col-lg col-md-12 divider-left d-flex flex-column align-items-center'>
                <Link href=' ' icon={<ArrowLeft size='20' />} standAlone>
                  breadcrumb 2
                </Link>
              </div>
              <div className='col-lg-12'>
                <Divider light />
                {activeCodeTab === '/react' && (
                  <CodeSnippet
                    code={mobileCompressedViewExample}
                    language='jsx'
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === '/rationale' && (
        <div className='row mb-4'>
          <Title size={3} className='col-lg-12'>
            Location based breadcrumbs
          </Title>
          <div className='col-lg col-md-12'>
            <Paragraph>
              We have opted for a location based breadcrumbs as it gives the
              user a good overview of where in the website hierarchy they are
              currently in, instead of path based breadcrumb which only show the
              path that the user have browsed.
            </Paragraph>
          </div>

          <Title size={3} className='col-lg-12'>
            Simplistic design
          </Title>
          <div className='col-lg col-md-12'>
            <Paragraph>
              As breadcrumbs are a secondary navigation, the overall design of
              breadcrumbs has been kept at a very simplistic level to avoid it
              being too prominent or confused for being a main navigational
              element.
            </Paragraph>
          </div>
        </div>
      )}

      {activeTab === '/props' && (
        <div>
          <Title size={2} className='mt-4 mb-4'>
            Props
          </Title>
          <table className='col-lg-12 mb-4'>
            <thead style={{ textAlign: 'left' }}>
              <tr>
                <th>
                  <Title size={3}>Prop name</Title>
                </th>
                <th>
                  <Title size={3}>Type</Title>
                </th>
                <th>
                  <Title size={3}>Description</Title>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>className</code>
                </td>
                <td>string</td>
                <td>Optional container class</td>
              </tr>
              <tr>
                <td>
                  <code>items</code>
                </td>
                <td>Required array of objects</td>
                <td>
                  A list of objects. Object key <code>text</code> is required,{' '}
                  <code>link</code> is optional.
                </td>
              </tr>
              <tr>
                <td>
                  <code>mobileCompressedView</code>
                </td>
                <td>boolean</td>
                <td>
                  A prop that makes the breadcrumb compressed on mobile view
                </td>
              </tr>
            </tbody>
          </table>

          <Divider className='mb-4' light />

          <div>
            <Text>Depends on</Text>
            <ul>
              <li>
                <Link
                  href='https://github.com/statisticsnorway/ssb-component-library/tree/master/src/components/Link'
                  isExternal
                >
                  Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BreadcrumbInfo;
