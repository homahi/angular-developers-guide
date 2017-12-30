import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  profields = [
    { id: 1, name: "Brad Greenn" },
    { id: 2, name: "Igor Winar" },
    { id: 3, name: "Jules Krener" },
    { id: 4, name: "MiskoHevery" },
    { id: 5, name: "Stebhen Fluin" },
  ]
  constructor() { }

  ngOnInit() {
  }

  showAlert(person: any) {
    alert(person.name);
  }

}
