/* How to write stories: https://storybook.js.org/docs/formats/component-story-format/ */
import React from 'react';
import { withReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';

import README from './README.md';
import Switch from './Switch';

export default {
  title: 'Switch',
  component: Switch,
  decorators: [withReadme(README)],
};

export const basic = () => <Switch onClick={action('clicked')}>Hello Switch</Switch>;

export const passingChildren = () => (
  <Switch onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Switch>
);
