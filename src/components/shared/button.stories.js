import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
  title: 'Buttons',
  component: Button,
};

export const FormSubmit = () => <Button onClick={action('clicked')} label="Send!" type="button" />;
