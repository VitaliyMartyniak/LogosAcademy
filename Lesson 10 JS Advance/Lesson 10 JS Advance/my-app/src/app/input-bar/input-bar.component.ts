import {Component, EventEmitter, OnInit, Output, Input, SimpleChanges, OnChanges, ViewChild} from "@angular/core";

@Component({
  selector: "app-input-bar",
  templateUrl: "./input-bar.component.html",
  styleUrls: ["./input-bar.component.scss"]
})
export class InputBarComponent implements OnInit, OnChanges {

  @Input() text: string = "Click";
  @Input() editValue: any;
  value: any = "";

  @Output() emitValue: EventEmitter<any> = new EventEmitter<any>();
  @Output() pushValue: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("myInput", {static: false}) myInput;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.editValue && changes.editValue.currentValue) {
      this.value = changes.editValue.currentValue.countr.name;
    }
  }

  ngOnInit() {
  }

  submit() {
    if (this.text === "Save") {
      this.emitValue.emit({value: this.myInput.nativeElement.value, index: this.editValue.i});
    } else {
      this.pushValue.emit({
        name: this.myInput.nativeElement.value,
        flag: " ",
        checked: false,
        status: "In Progress",
        area: 100000,
        population: 432432423
      });
    }

    this.myInput.nativeElement.value = "";
  }

}
