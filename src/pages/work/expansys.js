import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import WorkProject from '../../components/work/workProject';
import WorkTitle from '../../components/work/workTitle';
import WorkBody from '../../components/work/workBody';
import WorkImages from '../../components/work/workImages';
import WorkFooter from '../../components/work/workFooter';

const projectName = 'Expansys';
const imagePath = '/images/work/expansys/';

const ProjectPage = () => (
  <Layout>
    <SEO title={`${projectName} | Work`} />
    <WorkProject>
      <WorkTitle
        title={projectName}
        year="2006—2016"
        extLink="https://www.expansys.jp/"
      />
      <WorkBody>
        <p>While Expansys had seen massive growth in the PDA / technology sector during first half of the 2000s, the look and feel of their multi-region/language ecommerce sites hadn’t changed significantly since they launched in 1999.</p>
        <p>I joined the web team in Autumn 2006, the first task was to update the sites to use a CSS based layout while keeping the familiarity of the original table-based site layout.</p>
        <p>Over the next few years we iterated over that design until 2011 where along with a new logo and branding, I overhauled the entire UI.</p>
        <p>2015 saw another Expansys redesign to incorporate a responsive layout, but with the internal changes at Expansys after the Brandpath merger and the huge shift internally towards developing branded partner stores, most of the Expansys sites were retired, leaving only a handful of Asian sites using the new layout.</p>
        <p>As the lead front-end developer at Expansys, it’s has been a tremendous learning opportunity and also an honour to serve hundreds of millions of users over the years on our ecommerce platform.</p>
      </WorkBody>
    </WorkProject>
    <WorkImages
      images={[
        { path: `${imagePath}expansys8.jpg`, desc: '2020: Current site, using tweaked 2015 layout' },
        { path: `${imagePath}expansys7.jpg`, desc: '2015: Full responsive redesign / launched in South Korea' },
        { path: `${imagePath}expansys6.jpg`, desc: '2011: Complete site redesign (fixed width) / new hero banners' },
        { path: `${imagePath}expansys5.jpg`, desc: '2010: New logo / colour scheme and header tweaks' },
        { path: `${imagePath}expansys4.jpg`, desc: '2009: Moved to tab based category nav / push top sellers' },
        { path: `${imagePath}expansys3.jpg`, desc: '2007: Simplified left nav / some changes to declutter' },
        { path: `${imagePath}expansys2.jpg`, desc: 'late 2006: Minor layout changes / updated site to use CSS styling' },
        { path: `${imagePath}expansys1.jpg`, desc: 'mid 2006: Homepage layout prior to starting at Expansys' },
      ]}
      name={projectName}
    />
    <WorkFooter
      currentProject={projectName}
    />
  </Layout>
);

export default ProjectPage;
