import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import WorkProject from '../../components/work/workProject';
import WorkTitle from '../../components/work/workTitle';
import WorkBody from '../../components/work/workBody';
import WorkImages from '../../components/work/workImages';
import WorkFooter from '../../components/work/workFooter';

const projectName = 'Samsung';
const imagePath = '/images/work/samsung/';

const ProjectPage = () => (
  <Layout>
    <SEO title={`${projectName} | Work`} />
    <WorkProject>
      <WorkTitle
        title={projectName}
        year="2015—2017"
      />
      <WorkBody>
        <p>Our team was given the project to rebuild and host the Samsung UK store on the Expansys platform with a strict 10 week deadline.</p>
        <p>Samsung’s existing ecommerce site, while functional was apparently too restrictive. They were looking for a more flexible solution so they could customise their offering to customers with regular updates, bundles, themed promos and special deals.</p>
        <p>One of the key requirements was to recreate the current Samsung UK layout, as customers would need to move between the two sites seamlessly. Relatively straightforward, but required attention to detail to ensure this performed as smoothly as possible across mobile, tablet and desktop.</p>
        <p>The project launched successfully on time and helped Samsung boost their online sales by 200% in the first 12 months vs. their previous store!</p>
        <p>In a subsequent update, I designed and built a bespoke checkout funnel tailored towards boosting conversion rate of flagship smartphones. The funnel upsold insurance, various payment plans plus compatible accessories alongside their new devices.</p>
        <p>I also built a number of high-profile and widely marketed offer pages, one of which helped the site generate over £1 million of revenue in 24&nbsp;hours.</p>
      </WorkBody>
    </WorkProject>
    <WorkImages
      images={[
        { path: `${imagePath}samsung1.jpg`, desc: 'Homepage' },
        { path: `${imagePath}samsung2.jpg`, desc: 'Category page' },
        { path: `${imagePath}samsung3.jpg`, desc: 'Product page' },
        { path: `${imagePath}samsung4.jpg`, desc: 'Trade in page' },
        { path: `${imagePath}samsung5.jpg`, desc: 'Upsell funnel for flagship devices' },
        { path: `${imagePath}samsung6.jpg`, desc: 'Blue Box Day offer page (mock - updated header)' },
      ]}
      name={projectName}
    />
    <WorkFooter
      currentProject={projectName}
    />
  </Layout>
);

export default ProjectPage;
