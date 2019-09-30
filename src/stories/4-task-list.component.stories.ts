import { actions, task } from './3-task.component.stories';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from 'src/app/task-list/task-list.component';
import { TaskComponent } from 'src/app/task/task.component';

export const defaultTasks = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' },
];

export const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

const props = {
  tasks: defaultTasks,
  pinTask: actions.pinTask,
  archiveTask: actions.archiveTask,
};

storiesOf('TaskList', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TaskListComponent, TaskComponent],
      imports: [CommonModule],
    }),
  )
  .add('default', () => {
    return {
      template: `
        <div style="padding: 3rem">
          <app-task-list [tasks]="tasks" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)"></app-task-list>
        </div>
      `,
      props,
    };
  })
  .add('withPinnedTasks', () => {
    return {
      template: `
        <div style="padding: 3rem">
          <app-task-list [tasks]="tasks" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)"></app-task-list>
        </div>
      `,
      props: {
        ...props,
        tasks: withPinnedTasks,
      },
    };
  })
  .add('loading', () => {
    return {
      template: `
        <div style="padding: 3rem">
          <app-task-list [tasks]="[]" loading="true" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)"></app-task-list>
        </div>
      `,
      props,
    };
  })
  .add('empty', () => {
    return {
      template: `
        <div style="padding: 3rem">
          <app-task-list [tasks]="[]" (pinTask)="pinTask($event)" (archiveTask)="archiveTask($event)"></app-task-list>
        </div>
      `,
      props,
    };
  });