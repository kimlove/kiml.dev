import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import WorkProject from '../../components/work/workProject';
import WorkTitle from '../../components/work/workTitle';
import WorkBody from '../../components/work/workBody';
import WorkImages from '../../components/work/workImages';
import WorkFooter from '../../components/work/workFooter';

const projectName = 'Huawei';
const imagePath = '/images/work/huawei/';

const ProjectPage = () => (
  <Layout>
    <SEO title={`${projectName} | Work`} />
    <WorkProject>
      <WorkTitle
        title={projectName}
        year="2015—2017"
      />
      <WorkBody>
        <p>After doing a couple of small bespoke projects with Huawei previously, we were given the brief to put together a group of European ecommerce sites collectively known as vMall in 2015, selling Honor and Huawei branded devices and accessories.</p>
        <p>While Huawei was the 3rd biggest smartphone manufacture in the world (only behind Samsung and Apple at the time), their awareness in Europe was relatively limited compared to Asia – vMall looked to change that with aggressive pricing, regular offers and Flash sales.</p>
        <p>The client drove the look and feel of the site and I worked directly with them to put the design together. Once they were happy with the layout,  I built the responsive front-end using SCSS and jQuery. The site launched in 9 regions in 6 languages.</p>
        <p>According to Google Analytics, we hit over 12,000 active users on one of their popular Flash deals, which was an interesting day!</p>
        <p>While vMall was popular, in 2017 Huawei decided to take EU ecommerce in-house and rebranded their online stores as HiHonor.</p>
      </WorkBody>
    </WorkProject>
    <WorkImages
      images={[
        { path: `${imagePath}huawei1.jpg`, desc: 'Homepage' },
        { path: `${imagePath}huawei2.jpg`, desc: 'Category page' },
        { path: `${imagePath}huawei3.jpg`, desc: 'Product page' },
        { path: `${imagePath}huawei4.jpg`, desc: 'Flash Deals page' },
      ]}
      name={projectName}
    />
    <WorkFooter
      currentProject={projectName}
    />
  </Layout>
);

export default ProjectPage;
