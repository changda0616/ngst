import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ComponentAComponent } from 'src/app/component-a/component-a.component';

storiesOf('Component A', module)
  .add('Chris', () => ({
    component: ComponentAComponent,
    props: {
      name: 'Chris',
      myEvent: action('Hello Chris!')
    },
  }))
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
  }));