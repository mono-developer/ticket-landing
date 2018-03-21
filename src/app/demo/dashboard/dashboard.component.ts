import { Component, OnInit, AfterViewInit, Inject} from '@angular/core';
import {fadeInAnimation} from "../../route.animation";

import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TicketDataService } from "../../../provider/ticketDemoService";

@Component({
  selector: 'ms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: {
    '[@fadeInAnimation]': 'true'
  },
  animations: [ fadeInAnimation ]
})
export class DashboardComponent implements OnInit, AfterViewInit {

  selectedIndex: number = 0;
  categoryData: any = [];

  config: any;
  profiles: any;
  profile_id: number;

  username: string;
  useremail: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    public ticketData: TicketDataService
  ) {

    this.profiles = this.ticketData.profileData;
    this.categoryData = this.ticketData.categoryList;

    this.config = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 0
    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }

  ngOnInit() {

  }

  openBookingDialog(eventName): void {
    console.log('test');
    let dialogRef = this.dialog.open(BookingDialogComponent, {
      width: '350px',
      data: { name: eventName, username: this.username, userEmail: this.useremail }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  openDescriptionDialog(data): void {
    console.log('Description');
    let dialogRef = this.dialog.open(DescriptionDialogComponent, {
      width: '350px',
      data: { name: data }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}

//Booking Dialog
@Component({
  templateUrl: 'booking-dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class BookingDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

// Description Dialog

@Component({
  templateUrl: 'description-dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DescriptionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(this.data)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
