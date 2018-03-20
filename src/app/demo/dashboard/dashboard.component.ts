import { Component, OnInit, AfterViewInit, Inject} from '@angular/core';
import {fadeInAnimation} from "../../route.animation";

import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  categoryList: any = [];

  config: any;
  profiles: any;
  profile_id: number;

  username: string;
  useremail: string;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog,
  ) {

    this.profiles = [
      { id: 0, event_name: 'World Music', category: 'Music', date: '22-24 March 2018', location: 'Street West USA', url: 'assets/img/backgrounds/gallery-1.jpg' },
      { id: 1, event_name: 'Perfect Concert', category: 'Concert', date: '19-20 April 2018', location: 'Street West USA', url: '../../../assets/img/backgrounds/gallery-2.jpg' },
      { id: 2, event_name: 'Actress Solor', category: 'Music', date: '20-24 March 2018', location: 'Street West USA', url: '../../../assets/img/backgrounds/gallery-3.jpg' },
      { id: 3, event_name: 'Lunch', category: 'Family', date: '18-26 March 2018', location: 'Street West USA', url: '../../../assets/img/backgrounds/gallery-1.jpg' },
      { id: 4, event_name: 'Melody Songs', category: 'Music', date: '01-07 April 2018', location: 'Street West USA', url: '../../../assets/img/backgrounds/gallery-2.jpg' },
      { id: 5, event_name: 'Base Ball', category: 'Sport', date: '02-11 April 2018', location: 'Street West USA', url: '../../../assets/img/backgrounds/gallery-3.jpg' },
    ]

    this.categoryList = [
      { id: 0, name: 'Music'},
      { id: 1, name: 'Sports' },
      { id: 2, name: 'Theater' },
      { id: 3, name: 'Concerts' },
      { id: 4, name: 'Family' },
      { id: 5, name: 'Others' },
      { id: 6, name: 'Circus' },
    ];

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
