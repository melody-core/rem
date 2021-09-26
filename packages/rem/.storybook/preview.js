import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { addReadme } from 'storybook-readme';
import { withTests } from '@storybook/addon-jest';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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
  }
});

// https://storybook.js.org/docs/react/essentials/toolbars-and-globals#advanced-usage
export const globalTypes = {
  title: 'Rem',
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'zh',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'zh', right: '🇨🇳', title: '中文' },
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
        { value: 'kr', right: '🇰🇷', title: '한국어' },
      ],
    },
  },
};

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  }
}