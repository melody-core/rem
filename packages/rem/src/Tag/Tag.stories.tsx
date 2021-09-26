/* How to write stories: https://storybook.js.org/docs/formats/component-story-format/ */
    import React from 'react';
    import { withReadme } from 'storybook-readme';
    import { action } from '@storybook/addon-actions';
    
    import README from './README.md';
    import Tag from './Tag';
    
    export default {
      title: 'Tag',
      component: Tag,
      decorators: [withReadme(README)],
    };
    
    
    export const basic = () => <Tag onClick={action('clicked')}>Hello Tag</Tag>;
    
    export const passingChildren = () => (
      <Tag onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Tag>
    );