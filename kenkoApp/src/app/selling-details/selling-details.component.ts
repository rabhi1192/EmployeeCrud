import { Component, OnInit } from '@angular/core';
import { SellingDetails } from '../sellingdetails';
import { Sellingdetails } from '../sellingdetails.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-selling-details',
  templateUrl: './selling-details.component.html',
  styleUrls: ['./selling-details.component.css']
})
export class SellingDetailsComponent implements OnInit {

  sellingDetails = new SellingDetails();
  submitted = false;
  message: string;

  constructor(
    private sellingdetailsService: Sellingdetails,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() : void {
    const id = this.route.snapshot.paramMap.get('id');
    debugger
    this.sellingdetailsService.getSellingDetail(id)
      .subscribe(sellingDetails => this.sellingDetails = sellingDetails);
  }
  update(): void{
    this.submitted = true;
    this.sellingdetailsService.updateSellingDetails(this.sellingDetails)
    .subscribe(result => this.message = "Selling Details Updated Successfully!!");
  }

  delete(): void {
    this.submitted = true;
    this.sellingdetailsService.deleteSellingDetails(this.sellingDetails._id)
        .subscribe(result => this.message = "Selling Details Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}
