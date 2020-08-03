import React from 'react';
import WorkImages from './workImages';

export default {
  title: 'Work/Detail',
  component: WorkImages,
};

export const GalleryImage = () => (
  <div style={{ maxWidth: '42em' }}>
    <WorkImages
      images={[
        { path: 'https://kiml.dev/images/work/expansys/expansys1.jpg', desc: 'Test Image 1' },
      ]}
      name="Project Name"
    />
  </div>
);
