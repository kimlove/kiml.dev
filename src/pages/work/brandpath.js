import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import WorkProject from '../../components/work/workProject';
import WorkTitle from '../../components/work/workTitle';
import WorkSkills from '../../components/work/workSkills';
import WorkBody from '../../components/work/workBody';
import WorkImages from '../../components/work/workImages';
import WorkFooter from '../../components/work/workFooter';

const projectName = 'Brandpath';
const imagePath = '/images/work/brandpath/';

const ProjectPage = () => (
  <Layout>
    <SEO title={`${projectName} | Work`} />
    <WorkProject>
      <WorkTitle
        title={projectName}
        year="2018"
        extLink="https://www.brandpath.com/"
      />
      <WorkSkills
        skills={['Gatsby', 'React', 'JavaScript (ES6)', 'SCSS', 'RWD']}
      />
      <WorkBody>
        <p>I’d been looking a React for a while, but hadn&apos;t had the chance to use on a live project&hellip;</p>
        <p>Previously built in Wordpress, the redesign of the Brandpath site seemed like a good opportunity to try Gatsby, JSX and add some basic interactivity using React. I also leveraged reusable components to keep the site as DRY as possible.</p>
        <p>The design and layout was provided from another designer internally using corporate brochure assets. Layout on mobile wasn&apos;t really considered, so I need to retrofit RWD while keeping the site as close to the original mock-ups as possible.</p>
        <p>I also implemented Webp optimised images (with .jpg fallbacks using &lt;picture&gt; tags) and used Lighthouse to discover and fix any performance issues.</p>
      </WorkBody>
    </WorkProject>
    <WorkImages
      images={[
        { path: `${imagePath}brandpath1.jpg`, desc: 'Homepage' },
        { path: `${imagePath}brandpath2.jpg`, desc: 'Homepage (scrolled)' },
        { path: `${imagePath}brandpath3.jpg`, desc: 'Category landing page' },
        { path: `${imagePath}brandpath4.jpg`, desc: 'About us (scrolled)' },
      ]}
      name={projectName}
    />
    <WorkFooter
      currentProject={projectName}
    />
  </Layout>
);

export default ProjectPage;
