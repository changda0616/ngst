import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  title: string;
  @Input() task: Task;
  @Output() pinTask: EventEmitter<any> = new EventEmitter();
  @Output() archiveTask: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onPin(id) {
    this.pinTask.emit(id);
  }

  onArchive(id) {
    this.archiveTask.emit(id);
  }
}
