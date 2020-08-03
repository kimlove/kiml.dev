import React from 'react';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Welcome',
};

export const ToStorybook = () => (
  <>
    <p>Welcome to the <strong>kiml.dev</strong> Storybook</p>
    <ul className="reset-list">
      <li><button onClick={linkTo('Button')} type="button">View Buttons</button></li>
      <li><button onClick={linkTo('Titles')} type="button">View Titles</button></li>
      <li><button onClick={linkTo('Work/Header')} type="button">View Work Headers</button></li>
    </ul>
  </>
);

ToStorybook.story = {
  name: 'to kiml.dev',
};
