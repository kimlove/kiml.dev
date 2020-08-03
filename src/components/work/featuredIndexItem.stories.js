import React from 'react';
import FeaturedIndexItem from './featuredIndexItem';

export default {
  title: 'Work/Index',
  component: FeaturedIndexItem,
};

export const FeaturedProjectCard = () => (
  <div style={{maxWidth: '30em'}}>
    <FeaturedIndexItem
      year="2010-2015"
      title="Project Name"
      subtitle="Project Subtitle"
      skills={['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5']}
      link="/work/project/"
      image="https://kiml.dev/images/work/index/expansys.jpg" //"/static/images/work/index/expansys.jpg"
    />
  </div>
);
