import React from 'react'

import Layout from '../components/layout'
import Cover from '../components/cover'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Cover />
  </Layout>
)

export default IndexPage
