import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import WorkProject from '../../components/work/workProject';
import WorkTitle from '../../components/work/workTitle';
import WorkBody from '../../components/work/workBody';
import WorkImages from '../../components/work/workImages';
import WorkFooter from '../../components/work/workFooter';

const projectName = 'Google VAS';
const imagePath = '/images/work/google-vas/';

const ProjectPage = () => (
  <Layout>
    <SEO title={`${projectName} | Work`} />
    <WorkProject>
      <WorkTitle
        title={projectName}
        year="2019&mdash;2020"
        extLink="private"
      />
      <WorkBody>
        <p>The Brandpath fulfilment team in Hong Kong do a lot of stock reprocessing for Google in Asia such as labelling / packaging / checking stock condition and so on. Up to now, most of this had been managed with spreadsheets which was proving to be cumbersome, especially when dealing with thousands of items.</p>
        <p>The ‘VAS’ project was to develop a web based system that could be easily used by both Google and allow the HK team manage this work more efficiently.</p>
        <ul>
          <li>Single Page App using Azure AD for authentication.</li>
          <li>Minimise external dependencies using the Fetch API over Axios.</li>
          <li>Bright and colourful User Interface.</li>
        </ul>
        <p>A secondary goal was to enable new functionality such as splitting jobs into batches, upload instructional PDFs to attached to tasks and of course allowing Google to track progress remotely.</p>
        <p>With another developer handling backend duties, I designed and built the SPA using React and Styled Components which interfaces with the JSON API using Fetch.</p>
      </WorkBody>
    </WorkProject>
    <WorkImages
      images={[
        { path: `${imagePath}google-vas1.jpg`, desc: 'Home' },
        { path: `${imagePath}google-vas2.jpg`, desc: 'Work Order Dashboard' },
        { path: `${imagePath}google-vas3.jpg`, desc: 'Add new product to the system' },
        { path: `${imagePath}google-vas4.jpg`, desc: 'Create new work order around a specific SKU' },
        { path: `${imagePath}google-vas5.jpg`, desc: 'Completed work order' },
        { path: `${imagePath}google-vas6.jpg`, desc: 'Add new batch modal window' },
      ]}
      name={projectName}
    />
    <WorkFooter
      currentProject={projectName}
    />
  </Layout>
);

export default ProjectPage;
