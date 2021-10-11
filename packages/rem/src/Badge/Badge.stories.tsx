/* How to write stories: https://storybook.js.org/docs/formats/component-story-format/ */
import React from 'react';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';

import README from './README.md';
import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  decorators: [withReadme(README)],
};


export const basic = () => <Badge onClick={action('clicked')}>Hello Badge</Badge>;

export const passingChildren = () => (
  <Badge onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Badge>
);