import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

interface Task {
  name: string;
  isDone: boolean;
  isChecked: boolean;
}

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnChanges {

  @Input() newTask: any;
  @Output() displayEditButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editTask: EventEmitter<any> = new EventEmitter<any>();
  @Output() taskCount: EventEmitter<number> = new EventEmitter<number>();

  tasks: Task[] = [
    {
      name: "HTML5",
      isDone: false,
      isChecked: false,
    },
    {
      name: "CSS3",
      isDone: false,
      isChecked: false,
    },
    {
      name: "SCSS",
      isDone: false,
      isChecked: false,
    },
    {
      name: "JavaScript",
      isDone: false,
      isChecked: false,
    },
    {
      name: "jQuery",
      isDone: false,
      isChecked: false,
    },
    {
      name: "Angular",
      isDone: false,
      isChecked: false,
    }
  ];

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.newTask && changes.newTask.currentValue) {
      this.tasks.push(changes.newTask.currentValue);
    }
    this.taskCount.emit(this.tasks.length);
  }

  checkboxCheck(object: Task) {
    object.isChecked = !object.isChecked;
    object.isDone = object.isChecked === true;
  }

  edit(task) {
    this.displayEditButton.emit(true);
    this.editTask.emit(task);
  }

  delete(task, index) {
    if (task.isDone === true) {
      this.tasks.splice(index, 1);
    }
    this.taskCount.emit(this.tasks.length);
  }
}
