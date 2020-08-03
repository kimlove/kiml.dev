import React from 'react';
import WorkTitle from './workTitle';

export default {
  title: 'Work/Detail/Header',
  component: WorkTitle,
};

export const StandardProject = () => <WorkTitle title="Project Name" year="2015—2020" extLink="https://www.external-link.com/" />;
export const InternalProject = () => <WorkTitle title="Project Name" year="2015—2020" extLink="private" />;
export const ExpiredProject = () => <WorkTitle title="Project Name" year="2015—2020" />;
