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
  
    
    export const basic = () => (
      <>
        <div style={{margin: '10px'}}>
          <Tag>default</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag type="primary" size="small" plain>plain</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag type="primary">primary</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag type="success">success</Tag>
          <Tag type="success" plain>success</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag type="warning">warning</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag type="danger">danger</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag type="primary" size="small">蕾姆蕾姆</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag size="small">small</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag size="large">large</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag className="bg-aquamarine">自定义的classname</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag type="success" round>round</Tag>
        </div>
        <div style={{margin: '10px'}}>
          <Tag type="warning" mark>mark</Tag>
        </div>
      </>
    );
    export const passingChildren = () => (
      <Tag onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Tag>
    );