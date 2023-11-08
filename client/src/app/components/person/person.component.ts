import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import {faChevronUp, faEdit, faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SET_HEIGHT} from "../../utils/utils-table";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  persons: any = [];
  showBackTop: string = '';
  limit: number = 70;
  constructor(private _modal: NgbModal, private _spinner: NgxSpinnerService, private toastr: ToastrService) { SET_HEIGHT('view', 20, 'height'); }

  ngOnInit(): void {
    this.loadData()
  }

  loadData = (): void => {
    axios.get('/api/person').then(({ data }) => {
      this.persons = data;
    })
  }

  protected readonly faPlus = faPlus;
  protected readonly faChevronUp = faChevronUp;
  protected readonly faEdit = faEdit;
  protected readonly faTrashAlt = faTrashAlt;
}
