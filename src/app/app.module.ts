import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatIconRegistry, } from "@angular/material";
import { RoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from './core/core.module';
import { DemoModule } from './demo/demo.module';
import { SortablejsModule } from 'angular-sortablejs';
import { ScrollbarModule } from './core/scrollbar/scrollbar.module';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { SwiperModule } from 'angular2-useful-swiper'; //or for angular-cli the path will be ../../node_modules/angular2-useful-swiper

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    DemoModule,
    SortablejsModule,
    ScrollbarModule,
    SwiperModule,
  ],
  providers: [
    MatIconRegistry,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
