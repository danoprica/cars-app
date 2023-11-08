import { Component, OnInit } from '@angular/core';
import {faChevronUp, faEdit, faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  cars: any = [];
  limit: number = 70;

  constructor() { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData = (): void => {
    axios.get('/api/car').then(({ data }) => {
      this.cars = data;
    })

  }

  protected readonly faChevronUp = faChevronUp;
  protected readonly faEdit = faEdit;
  protected readonly faPlus = faPlus;
  protected readonly faTrashAlt = faTrashAlt;
}
