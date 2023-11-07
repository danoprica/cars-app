import { Component, OnInit } from '@angular/core';
import {faChevronUp, faEdit, faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  protected readonly faChevronUp = faChevronUp;
  protected readonly faEdit = faEdit;
  protected readonly faPlus = faPlus;
  protected readonly faTrashAlt = faTrashAlt;
}
