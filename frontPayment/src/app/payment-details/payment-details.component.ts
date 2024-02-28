import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../Service/payment-detail.service';
import { PaymentDetail } from '../Service/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service : PaymentDetailService, public toastr : ToastrService){

  }

  ngOnInit(): void {
    this.service.getAllPaymentsList();
  }

  popForm(select: PaymentDetail) {
    this.service.formData = Object.assign({}, select);
  }

  onDelete(id: number) {
    if(confirm('Are you sure you want to delete this'))
    this.service.deletePaymentDetail(id)
    .subscribe({
      next: res => {
        this.service.list = res as PaymentDetail[];
        this.toastr.error('Deleted Successfully','Payment Detail Register')
      },
      error: err => {console.log(err)}
    })
  }

}
