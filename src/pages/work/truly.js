import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import WorkProject from '../../components/work/workProject';
import WorkTitle from '../../components/work/workTitle';
import WorkBody from '../../components/work/workBody';
import WorkImages from '../../components/work/workImages';
import WorkFooter from '../../components/work/workFooter';

const projectName = 'Truly';
const imagePath = '/images/work/truly/';

const ProjectPage = () => (
  <Layout>
    <SEO title={`${projectName} | Work`} />
    <WorkProject>
      <WorkTitle
        title={projectName}
        year="2018—2020"
        extLink="https://www.truly.co.uk/"
      />
      <WorkBody>
        <p>Originally a partnership between Holly Willoughby and Peter Jones, Truly is a lifestyle brand focusing on fashion and homewares. While Holly stepped away for personal reasons during development, the brand successfully launched in November 2018.</p>
        <ul>
          <li>A hybrid site using a mix of server side and React based components.</li>
          <li>Product data provided via JSON API and rendered with React.</li>
          <li>I wrote a custom product image viewer for detail images, and I rolled our own image lazy loading implementation using the Intersection Observer API.</li>
          <li>Custom Webpack 4 build configuration.</li>
        </ul>
        <p>The site design and layout were provided by an external agency who requested a fair amount of interactivity. As Truly was our first new ecommerce project for a while, I was keen to make some changes to our standard front-end stack, hence wanting to use React and Webpack over jQuery and Grunt.</p>
        <p>This was the first time we had implemented React on an ecommerce site. To avoid risk, we trialled React for a couple of weeks using a rough functional demo before the project officially kicked off. All went well, so we were confident we wouldn’t hit any major issues.</p>
        <p>Using React ended up being a great choice for Truly – while there are some elements I’d love to refactor with hindsight, overall I&apos;m happy with how the project turned out.</p>
      </WorkBody>
    </WorkProject>
    <WorkImages
      images={[
        { path: `${imagePath}truly1.jpg`, desc: 'Homepage (scrolled)' },
        { path: `${imagePath}truly2.jpg`, desc: 'Category landing page' },
        { path: `${imagePath}truly3.jpg`, desc: 'Sub category page (scrolled)' },
        { path: `${imagePath}truly4.jpg`, desc: 'Product page with colour/size selectors' },
        { path: `${imagePath}truly5.jpg`, desc: 'Shopping basket with upsell' },
        { path: `${imagePath}truly6.jpg`, desc: 'Checkout' },
      ]}
      name={projectName}
    />
    <WorkFooter
      currentProject={projectName}
    />
  </Layout>
);

export default ProjectPage;
