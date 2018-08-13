import { Component, OnInit } from '@angular/core';
import {REACTIVE_DRIVEN_DIRECTIVES} from '@angular/forms/src/directives';
import { UUID } from 'angular2-uuid';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {PaymentService} from './payment.service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: any = {} ;
  validateForm: FormGroup;
  isLoading = false;
  requestId = UUID.UUID();
  constructor(private fb: FormBuilder,
              private router: Router,
              private paymentService: PaymentService,
              private modalService: NzModalService) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      product: [ null, [ Validators.required ] ],
      debtorIban: [ null, [ Validators.required ] ],
      creditorIban: [ null, [ Validators.required ] ],
      creditorName: [ null, [ Validators.required ] ],
      amount: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }


  submitForm(): void {
    this.isLoading = true ;
    setTimeout(_ => {
      this.isLoading = false ;
      this.modalService.info({
        nzTitle: 'Infos',
        nzContent: '<p>You will be redirect to your Online banking</p><p>to confirm the Payment !.</p>',
        nzOnOk: () => window.location.href = 'http://localhost:4200/'
      });
    }, 4000);

  }

}
