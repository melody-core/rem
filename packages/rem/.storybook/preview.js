import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import { withTests } from '@storybook/addon-jest';
import results from '../src/.jest-test-results.json';


/* Add A11y panel */
addDecorator(withA11y);

/* Enable README for all stories */
addDecorator(addReadme);

addDecorator(withTests({
  results,
}));

/* General options for storybook */
addParameters({
  /* Options for storybook-readme plugin */
  readme: {
    codeTheme: 'github',
    StoryPreview: ({ children }) => children,
  },
});