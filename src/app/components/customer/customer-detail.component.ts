import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.css'
})
export class CustomerDetailComponent implements OnInit{
  id: string |undefined;
  customer: Customer;

  constructor(private route: ActivatedRoute, private customerService: CustomerService){
    this.id= this.route.snapshot.paramMap.get('id')?.toString();
    this.customer = new Customer();
  }
  ngOnInit(): void {
    this.getCustomer();
  }
  getCustomer(){
    this.customerService.getCustomerById(this.id!).subscribe((data)=>{
      this.customer = data;
    })
  }

  updateCustormer(){
    
  }
}
