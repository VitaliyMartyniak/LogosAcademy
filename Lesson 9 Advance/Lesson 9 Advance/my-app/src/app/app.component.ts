import {Component} from "@angular/core";
import {Import} from "@angular/core/schematics/utils/typescript/imports";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent{
  taskCount: number = 0;
  editTask: object;
  newTask: object;
  displayEditButton: boolean = false;
  constructor() {

  }

  onAddNewTask(event) {
    this.newTask = event;
  }

  editButton(event) {
    this.displayEditButton = event;
  }

  editButtonStateFalse(event) {
    this.displayEditButton = event;
  }

  onEditTask(event) {
    this.editTask = event;
    console.log(this.editTask);
  }

  setTaskCount(event) {
    this.taskCount = event;
  }

}
