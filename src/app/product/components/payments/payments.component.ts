import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface Payment {
  id: number;
  name: string;
  icon: string;
  desc?: string;
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  @Input() payments: Payment[] = [];
  @Output() paymentSelected = new EventEmitter<Payment>();
  selectedId = 1;
  constructor() { }

  ngOnInit() { }

  handleSelection(payment: Payment) {
    this.selectedId = payment.id;
    this.paymentSelected.emit(payment);
  }
}
