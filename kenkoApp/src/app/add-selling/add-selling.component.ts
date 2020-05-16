import { Component, OnInit } from '@angular/core';
import { SellingDetails } from '../sellingdetails';
import { Sellingdetails } from '../sellingdetails.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-selling',
  templateUrl: './add-selling.component.html',
  styleUrls: ['./add-selling.component.css']
})
export class AddSellingComponent {

  sellingDetails = new SellingDetails();
  submitted = false;

  constructor(
    private sellingDetailsService: Sellingdetails,
    private location: Location
  ) { }

  newSellingDetails(): void {
    this.submitted = false;
    this.sellingDetails = new SellingDetails();
  }

 addSellingDetails() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.sellingDetails);
    this.sellingDetailsService.addSellingDetails(this.sellingDetails)
        .subscribe();
  }

}
