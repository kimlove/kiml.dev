import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Title from '../components/shared/title';
import FeaturedIndexItem from '../components/work/featuredIndexItem';
import OtherProjects from '../components/work/otherProjects';

const IndexPage = () => (
  <Layout>
    <SEO title="Work" />
    <WorkIndexTitle>
      <Title titleText="Featured projects" type="medium" />
    </WorkIndexTitle>


    <WorkIndexItem>
      <FeaturedIndexItem
        year="2018-2020"
        title="Truly"
        subtitle="ecommerce / fashion"
        skills={['React', 'JavaScript (ES6)', 'JSON API', 'RWD', 'SCSS']}
        link="/work/truly/"
        image="/images/work/index/truly.jpg"
      />
    </WorkIndexItem>

    
    <WorkIndexItem>
      <FeaturedIndexItem
        year="2019-2020"
        title="Google VAS"
        subtitle="internal SPA"
        skills={['React', 'JavaScript (ES6)', 'Styled Components', 'JSON API', 'RWD']}
        link="/work/google-vas/"
        image="/images/work/index/google-vas.jpg"
      />
    </WorkIndexItem>

    <WorkIndexItem>
      <FeaturedIndexItem
        year="2006-2015"
        title="Expansys"
        subtitle="ecommerce platform"
        skills={['UI Design', 'RWD', 'JavaScript', 'CSS/SCSS', 'Multilingual']}
        link="/work/expansys/"
        image="/images/work/index/expansys.jpg"
      />
    </WorkIndexItem>


    <WorkIndexItem>
      <FeaturedIndexItem
        year="2015-2017"
        title="Samsung"
        subtitle="official UK &amp; Nordic stores"
        skills={['UI Design', 'RWD', 'JavaScript', 'CSS/SCSS', 'HTML']}
        link="/work/samsung/"
        image="/images/work/index/samsung.jpg"
      />
    </WorkIndexItem>

    <WorkIndexItem>
      <FeaturedIndexItem
        year="2015-2018"
        title="Huawei"
        subtitle="vMall EU store"
        skills={['UI Design', 'RWD', 'JavaScript', 'CSS/SCSS', 'HTML']}
        link="/work/huawei/"
        image="/images/work/index/huawei.jpg"
      />
    </WorkIndexItem>
    
    <WorkIndexItem>
      <FeaturedIndexItem
        year="2018"
        title="Brandpath"
        subtitle="corporate site"
        skills={['Gatsby', 'React', 'JavaScript (ES6)', 'SCSS', 'RWD']}
        link="/work/brandpath/"
        image="/images/work/index/brandpath.jpg"
      />
    </WorkIndexItem>

    <WorkIndexTitle>
      <Title titleText="Other Projects" type="medium" />
    </WorkIndexTitle>

    <OtherProjects />
  </Layout>
);

export default IndexPage;

const WorkIndexTitle = styled.div`
  grid-column: span 12;
  h2 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: .2em;
    font-size: 2.25em;
    margin: 0;
    color: #aaa;
    text-align: center;
  }
`

const WorkIndexItem = styled.section`
  grid-column: span 12;
  font-family: 'Merriweather', serif;
  width: 100%;
  max-width: 36em;
  margin: 0 auto;
  @media (min-width: ${(props) => props.theme.mq.medium}) {
    grid-column: span 6;
    max-width: none;
  }
  @media (min-width: ${(props) => props.theme.mq.xlarge}) {
    grid-column: span 4;
  }
`;
