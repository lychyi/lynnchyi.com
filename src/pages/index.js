import React from 'react'

import Layout from '../components/layout'
import RandomCover from '../components/random-cover'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Lynn Chyi, Design Technologist in the Bay Area" keywords={[`gatsby`, `react`, `design technologist`, `hard edge abstraction`]} />
    <RandomCover />
  </Layout>
)

export default IndexPage
