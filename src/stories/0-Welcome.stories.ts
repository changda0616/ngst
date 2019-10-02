import { Welcome } from '@storybook/angular/demo';
import { storiesOf } from '@storybook/angular';

const stories = storiesOf('Welcome', module);
stories.add('Welcome', () => ({
  component: Welcome,
  props: {
    name: 'to Storybook',
  },
}));
