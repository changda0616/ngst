import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ComponentAComponent } from 'src/app/component-a/component-a.component';
import {withKnobs, text} from '@storybook/addon-knobs/angular';

import * as markdown from './2-component-a.notes.md';

const stories = storiesOf('Component A', module);
stories.addDecorator(withKnobs);
stories.add('Chris', () => ({
    component: ComponentAComponent,
    props: {
      name: text("name", 'Chris'),
      myEvent: action('Hello Chris!')
    },
  }), { notes: { markdown }})
  .add('Jane', () => ({
    component: ComponentAComponent,
    props: {
      name: 'Jane',
      myEvent: action('Hello Jane!')
    },
  }))
  .add('Joe', () => ({
    component: ComponentAComponent,
    props: {
      name: 'Joe',
      myEvent: action('Hello Joe!')
    },
  }))
  .add('People want task', () => ({
    component: ComponentAComponent,
    props: {
      name: 'iLoveTask',
      myEvent: linkTo('Task')
    },
  }));