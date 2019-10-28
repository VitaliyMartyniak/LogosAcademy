import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

interface Task {
  name: string;
  isDone: boolean;
  isChecked: boolean;
}

@Component({
  selector: 'app-edit-element',
  templateUrl: './edit-element.component.html',
  styleUrls: ['./edit-element.component.scss']
})
export class EditElementComponent implements OnChanges{

  @Input() editTask: object;
  edittedTask: Task;
  @Output() editButtonState: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    this.edittedTask = changes.editTask.currentValue;
  }

  editElement(editName) {
    this.edittedTask.name = editName;
    this.editButtonState.emit(false);
  }

}
