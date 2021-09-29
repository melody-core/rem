/* How to write stories: https://storybook.js.org/docs/formats/component-story-format/ */
    import React from 'react';
    import { withReadme } from 'storybook-readme';
    import { action } from '@storybook/addon-actions';
    
    import README from './README.md';
    import Divider from './Divider';
    
    export default {
      title: 'Divider',
      component: Divider,
      decorators: [withReadme(README)],
    };
    
    
    export const basic = () => (
      <div>
        <h3>0.5像素</h3>
        <Divider hairline>分割线</Divider>
        <h3>位置</h3>
        <Divider>分割线</Divider>
        <Divider contentPosition='left'>left</Divider>
        <Divider contentPosition='center'>center</Divider>
        <Divider contentPosition='right'>right</Divider>
        <h3>虚线</h3>
        <Divider dashed>分割线</Divider>
      </div>
    )
    
    export const passingChildren = () => (
      <Divider onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Divider>
    );