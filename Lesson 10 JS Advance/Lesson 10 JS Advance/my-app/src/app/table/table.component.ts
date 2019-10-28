import {Component, EventEmitter, OnInit, Output, SimpleChanges, ViewChild, Input, OnChanges} from "@angular/core";

interface Country {
  name: string;
  flag: string;
  checked: boolean;
  status: string;
  area: number;
  population: number;
}

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit, OnChanges {

  countries: Country[] = [
    {
      name: "Russia",
      flag: "f/f3/Flag_of_Russia.svg",
      checked: true,
      status: "Done",
      area: 17075200,
      population: 146989754
    },
    {
      name: "Canada",
      flag: "c/cf/Flag_of_Canada.svg",
      checked: false,
      status: "In Progress",
      area: 9976140,
      population: 36624199
    },
    {
      name: "United States",
      flag: "a/a4/Flag_of_the_United_States.svg",
      checked: true,
      status: "Done",
      area: 9629091,
      population: 324459463
    },
    {
      name: "China",
      flag: "f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      checked: false,
      status: "In Progress",
      area: 9596960,
      population: 1409517397
    },
    {
      name: "Ukraine",
      flag: "f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      checked: true,
      status: "Done",
      area: 950,
      population: 14397
    }
  ];
  @Input() newCountry: any;
  @Input() editCountry: any;
  @Output() emitValueToEdit: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("input", {static: false}) input;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.editCountry && changes.editCountry.currentValue) {
      this.countries[changes.editCountry.currentValue.index].name = changes.editCountry.currentValue.value;
    } else if (changes.newCountry && changes.newCountry.currentValue) {
      this.countries.push(changes.newCountry.currentValue);
    }
  }

  changeCheckboxValue(country: Country) {
    country.checked = !country.checked;
    country.status = country.checked ? "Done" : "In Progress";
  }

  delete(index: number) {
    this.countries.splice(index, 1);
  }

  edit(country: Country, index: number) {
    this.emitValueToEdit.emit({country: country, i: index});
  }

}
