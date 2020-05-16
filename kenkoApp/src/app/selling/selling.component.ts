import { Component, OnInit } from '@angular/core';
import { SellingDetails } from '../sellingdetails';
import { Sellingdetails } from '../sellingdetails.service';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.css']
})
export class SellingComponent implements OnInit {

  sellingDetails: SellingDetails[];

  constructor(private sellingdetailsService: Sellingdetails) { }

  ngOnInit():void {
    this.getSellingDetails();
 }

 getSellingDetails() {
  return this.sellingdetailsService.getSellingDetails()
             .subscribe(
              sellingDetails => {
                console.log(sellingDetails);
                this.sellingDetails = sellingDetails
               }
              );
 }
}
