module.exports = [
  {
    path: './{{ComponentName}}.scss',
    code: `.wrap {
        background-color: tomato;
        padding: 8px;
        border: none;
        cursor: pointer;
        font-weight: 500;
      }`,
  },
  {
    path: './{{ComponentName}}.stories.mdx',
    code: `import { Meta, Preview, Story, Props } from '@storybook/addon-docs/blocks';
    import {{ComponentName}} from './{{ComponentName}}';
    
    <Meta title='{{ComponentName}}' component={{{ComponentName}}} />
    
    # {{ComponentName}}
    
    With \`MDX\` we can define a story for \`{{ComponentName}}\` right in the middle of our
    markdown documentation.
    
    <Preview>
          <{{ComponentName}}>Example</{{ComponentName}}>
    </Preview>
    
    ## Props
    
    <Props of={{{ComponentName}}} />
    `,
  },
  {
    path: './{{ComponentName}}.stories.tsx',
    code: `/* How to write stories: https://storybook.js.org/docs/formats/component-story-format/ */
    import React from 'react';
    import { withReadme } from 'storybook-readme';
    import { action } from '@storybook/addon-actions';
    
    import README from './README.md';
    import {{ComponentName}} from './{{ComponentName}}';
    
    export default {
      title: '{{ComponentName}}',
      component: {{ComponentName}},
      decorators: [withReadme(README)],
    };
    
    
    export const basic = () => <{{ComponentName}} onClick={action('clicked')}>Hello {{ComponentName}}</{{ComponentName}}>;
    
    export const passingChildren = () => (
      <{{ComponentName}} onClick={action('clicked')}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </{{ComponentName}}>
    );`,
  },
  {
    path: './{{ComponentName}}.test.js',
    code: `import React from 'react';

    import '@testing-library/jest-dom'
    import { render, fireEvent } from '@testing-library/react';
    
    import {{ComponentName}} from './{{ComponentName}}';
    
    describe('<{{ComponentName}} />', () => {
      it('renders component without break', () => {
        const { getByTestId } = render(<{{ComponentName}} data-testid="{{ComponentName}}" />);
    
        expect(getByTestId('{{ComponentName}}')).toMatchInlineSnapshot(\`
          <div
            class="wrap"
            data-testid="{{ComponentName}}"
          />
        \`);
      });
    
      it('triggers sent onClick function', () => {
        const onClick = jest.fn();
    
        const { getByTestId } = render(
          <{{ComponentName}} data-testid="button" onClick={onClick} />,
        );
    
        fireEvent.click(getByTestId('{{ComponentName}}'));
    
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });`,
  },
  {
    path: './{{ComponentName}}.tsx',
    code: `import React, { FC } from 'react';
    import classnames from 'classnames';
    import PropTypes from 'prop-types';
    
    import './{{ComponentName}}.scss';
    
    const {{ComponentName}}: FC<Record<any, any>> = ({ className, ...rest }) => {
      return <div className={classnames('wrap', className)} {...rest} />;
    };
    
    {{ComponentName}}.propTypes = {
      className: PropTypes.string,
    };
    export default {{ComponentName}};
    `,
  },
  {
    path: './index.tsx',
    code: `export { default } from './{{ComponentName}}';`,
  },
  {
    path: './type.ts',
    code: `export interface {{ComponentName}}Props{}`,
  },  {
    path: './README.md',
    code: `#{{ComponentName}}
    请参照 Tag 组件进行编写`,
  },];
