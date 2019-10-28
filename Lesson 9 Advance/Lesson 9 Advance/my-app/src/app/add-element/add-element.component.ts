import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-add-element',
  templateUrl: './add-element.component.html',
  styleUrls: ['./add-element.component.scss']
})
export class AddElementComponent {
  @Output() newTask: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  addElement(taskName) {
    let newTask = {
      name: taskName,
      isDone: false,
      isChecked: false,
    }
    this.newTask.emit(newTask);
  }

}
