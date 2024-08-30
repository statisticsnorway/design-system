import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CodeSnippet from '@components/CodeSnippet/CodeSnippet'
import { Title, Divider, Tabs } from '@statisticsnorway/ssb-component-library'

const ComponentExample = ({ title, overviewText, exampleContent, codeReact, codeHtml, tabCode }) => {
  const [activeCodeTab, setActiveCodeTab] = useState('/react')
  const tabCodeClicked = (e) => setActiveCodeTab(e)
  return (
    <div className='component row'>
      <Title size={2} className='col-lg-12'>
        {title}
      </Title>
      <div className='col-lg col-md-12'>
        <p>{overviewText}</p>
      </div>
      <div className='component-example col-lg col-md-12 divider-left'>{exampleContent}</div>
      <div className='col-lg-12'>
        <Tabs activeOnInit='/react' items={tabCode} onClick={tabCodeClicked} />
        <Divider light />
        {activeCodeTab === '/react' && <CodeSnippet code={codeReact} language='jsx' />}
        {activeCodeTab === '/html' && <CodeSnippet code={codeHtml} language='html' />}
      </div>
    </div>
  )
}

ComponentExample.propTypes = {
  title: PropTypes.string.isRequired,
  overviewText: PropTypes.string.isRequired,
  exampleContent: PropTypes.object.isRequired,
  codeReact: PropTypes.string.isRequired,
  codeHtml: PropTypes.string.isRequired,
  tabCode: PropTypes.arrayOf(PropTypes.object),
}

export default ComponentExample
