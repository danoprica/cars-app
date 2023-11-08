import axios from 'axios';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {faChevronUp, faEdit, faPlus, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { SCROLL_TOP, SET_HEIGHT } from 'src/app/utils/utils-table';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  cars: any = [];
  showBackTop: string = '';
  limit: number = 70;

  constructor(private _modal: NgbModal, private _spinner: NgxSpinnerService, private toastr: ToastrService) { SET_HEIGHT('view', 20, 'height'); }


  ngOnInit(): void {
    this.loadData()
  }

  loadData = (): void => {
    axios.get('/api/car').then(({ data }) => {
      this.cars = data;
    })
  }

  delete = (car: any): void => {
    const modalRef = this._modal.open(ConfirmDialogComponent, {size: 'lg', keyboard: false, backdrop: 'static'});
    modalRef.componentInstance.title = `Ștergere informație`;
    modalRef.componentInstance.content = `<p class='text-center mt-1 mb-1'>Doriți să ștergeți informația având tipul <b>${car.type}</b>, denumirea: <b>${car.name}</b>?`;
    modalRef.closed.subscribe(() => {
      axios.delete(`/api/car/${car.id}`).then(() => {
        this.toastr.success('Informația a fost ștearsă cu succes!');
        this.loadData();
      }).catch(() => this.toastr.error('Eroare la ștergerea informației!'));
    });
  }


  protected readonly faChevronUp = faChevronUp;
  protected readonly faEdit = faEdit;
  protected readonly faPlus = faPlus;
  protected readonly faTrashAlt = faTrashAlt;
}
