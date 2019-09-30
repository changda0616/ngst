import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasksInOrder: Task[] = [];
  @Input() loading = false;
  @Output() pinTask: EventEmitter<any> = new EventEmitter();
  @Output() archiveTask: EventEmitter<any> = new EventEmitter();

  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
  }

  constructor() {}

  ngOnInit() {}
}
