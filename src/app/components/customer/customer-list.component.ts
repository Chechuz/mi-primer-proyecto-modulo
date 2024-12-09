import { Component } from '@angular/core';
import { LocationCustomer } from '../../models/location.model';
 import data from '../../data/locationData.json'
import { count } from 'rxjs';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  locationData: Array<LocationCustomer>;
  cities: Array<string | undefined>;
  countries: Array<string | undefined>;

  companySearch: string;
  citySearch: string;
  countrySearch: string;
  customers: Array<Customer>;

  constructor(private customerService: CustomerService){
    this.locationData = data;
    this.cities = [...new Set(this.locationData.map(item => item.city))].sort();
    this.countries = [...new Set(this.locationData.map(item => item.country))].sort();

    this.companySearch ='';
    this.citySearch = '';
    this.countrySearch = '';
    this.customers=new Array<Customer>();

  }

  onChangeCountry(){
    if(this.countrySearch==''){
      this.cities = [...new Set(this.locationData.map(item => item.city))].sort();
    }else{
      let temp = this.locationData.filter(item => item.country === this.countrySearch);
      this.cities = [...new Set(temp.map(item => item.city))].sort();
    }
    this.citySearch='';
  }
   searchCustomer(){
    console.log('Inicio Busqueda')
    this.customerService.getCustomers(this.companySearch, this.citySearch, this.countrySearch).subscribe((data)=>{
      this.customers = data;
      console.log('Fin suscribe')
    });
    console.log('Finaliza Busqueda')
   }

   clearCustomer(){
   
    this.cities = [...new Set(this.locationData.map(item => item.city))].sort();
    this.countries = [...new Set(this.locationData.map(item => item.country))].sort();

    this.companySearch ='';
    this.citySearch = '';
    this.countrySearch = '';
    this.customers=new Array<Customer>();
   }
}
