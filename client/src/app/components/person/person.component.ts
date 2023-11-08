import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import {faChevronUp, faEdit, faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SET_HEIGHT} from "../../utils/utils-table";
import {PersonModalComponent} from "./person-modal/person-modal.component";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  persons: any = [];
  cars: any = [];
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
    axios.get('/api/car').then(({ data }) => {
      this.cars = data;
    })
  }

  addEdit = (id_person?: number): void => {
    const modalRef = this._modal.open(PersonModalComponent, {size: 'lg', keyboard: false, backdrop: 'static'});
    modalRef.componentInstance.id_person = id_person;
    modalRef.closed.subscribe(() => {
      this.loadData();
    });
  }

  delete = (person: any): void => {
    const modalRef = this._modal.open(ConfirmDialogComponent, {size: 'lg', keyboard: false, backdrop: 'static'});
    modalRef.componentInstance.title = `Ștergere informație`;
    modalRef.componentInstance.content = `<p class='text-center mt-1 mb-1'>Doriți să ștergeți persoana cu numele <b>${person.first_name}</b> <b>${person.last_name}</b>?`;
    modalRef.closed.subscribe(() => {
      axios.delete(`/api/person/${person.id}`).then(() => {
        this.toastr.success('Persoana a fost ștearsă cu succes!');
        this.loadData();
      }).catch(() => this.toastr.error('Eroare la ștergerea persoanei!'));
    });
  }


  protected readonly faPlus = faPlus;
  protected readonly faChevronUp = faChevronUp;
  protected readonly faEdit = faEdit;
  protected readonly faTrashAlt = faTrashAlt;
}
