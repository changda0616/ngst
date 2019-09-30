import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TaskComponent } from '../app/task/task.component';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  pinTask: action('pinTask'),
  archiveTask: action('archiveTask'),
};

storiesOf('Task', module)
  // 讓我們可以在測試情境中添加材料
  .addDecorator(
    moduleMetadata({
      declarations: [TaskComponent],
    }),
  )
  .add('default', () => {
    return {
      template: `<app-task [task]="task" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)" ></app-task>`,
      props: {
        task,
        pinTask: actions.pinTask,
        archiveTask: actions.archiveTask,
      },
    };
  })
  .add('pinned', () => {
    return {
      template: `<app-task [task]="task" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)" ></app-task>`,
      props: {
        task: { ...task, state: 'TASK_PINNED' },
        pinTask: actions.pinTask,
        archiveTask: actions.archiveTask,
      },
    };
  })
  .add('archived', () => {
    return {
      template: `<app-task [task]="task" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)" ></app-task>`,
      props: {
        task: { ...task, state: 'TASK_ARCHIVED' },
        pinTask: actions.pinTask,
        archiveTask: actions.archiveTask,
      },
    };
  });

