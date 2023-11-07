import { Component, OnInit } from '@angular/core';
import {faChevronUp, faEdit, faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly faPlus = faPlus;
  protected readonly faChevronUp = faChevronUp;
  protected readonly faEdit = faEdit;
  protected readonly faTrashAlt = faTrashAlt;
}
