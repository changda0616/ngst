import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/angular/demo';
import { storiesOf } from '@storybook/angular';

const stories = storiesOf('Button', module);
stories.add('text', () => ({
  component: Button,
  props: {
    text: 'Hello Button',
  },
}))

.add('emoji', () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
}), { notes: 'My notes on a button with emojis'})

.add('with some emoji and action', () => ({
  component: Button,
  props: {
    text: '😀 😎 👍 💯',
    onClick: action('This was clicked OMG'),
  }
}), { notes: 'My notes on a button with emojis' })

.add('Button with link to another story', () => ({
  component: Button,
  props: {
    text: 'Go to Welcome Story',
    onClick: linkTo('Welcome'),
  }
}));
