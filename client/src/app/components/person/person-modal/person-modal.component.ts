import axios from 'axios';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'person-modal',
  templateUrl: './person-modal.component.html'
})
export class PersonModalComponent implements OnInit {
  @Input() id_person: number | undefined;
  cars: any = [];
  carsModal: any = [];
  modal = {} as any;

  constructor(private _spinner: NgxSpinnerService, public activeModal: NgbActiveModal, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.loadCars();
    if (this.id_person) {
      this._spinner.show();
      axios.get(`/api/person/${this.id_person}`).then(({ data }) => {
        this.modal = data;
        this._spinner.hide();
      }).catch(() => this.toastr.error('Eroare la preluarea informației!'));
    }
  }



  loadCars = (): void => {
    axios.get('/api/car').then(({ data }) => {
      this.cars = data;
      this.carsModal = this.cars.filter((car: any) => car.id_person===this.id_person);
    })

  }

  save(): void {
    this._spinner.show();
    this.carsModal.forEach((car: any) => {
      car.id_person = this.id_person;
      let data = {
        'id': car.id,
        'id_person': car.id_person
      }
      axios.put('/api/car', data).then(() => {
        this._spinner.hide();
        this.activeModal.close();
      });
    })



    if (!this.id_person) {
      axios.post('/api/person', this.modal).then(() => {
        this._spinner.hide();
        this.toastr.success('Informația a fost salvată cu succes!');
        this.activeModal.close();
      }).catch(() => this.toastr.error('Eroare la salvarea informației!'));
    } else {
      axios.put('/api/person', this.modal).then(() => {
        this._spinner.hide();
        this.toastr.success('Informația a fost modificată cu succes!');
        this.activeModal.close();
      }).catch(() => this.toastr.error('Eroare la modifipersonea informației!'));
    }
  }

}
