import {Component} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  propToEdit: any;
  valueAfterEdit: any;
  valueAfterPush: any;

  constructor() {

  }

  edit(event) {
    this.propToEdit = event;
  }

  afterEdit(event) {
    this.valueAfterEdit = {
      index: event.index,
      value: event.value
    };
  }

  afterPush(event) {
    this.valueAfterPush = event;
  }
}
