import React from 'react'

import Layout from '../components/layout'
import RandomCover from '../components/random-cover'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <RandomCover />
  </Layout>
)

export default IndexPage
