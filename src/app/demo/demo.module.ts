import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from '../core/widgets/widgets-v1/widget-v1/widget-v1.component';
import { LineChartWidgetComponent } from '../core/widgets/widgets-v1/line-chart-widget/line-chart-widget.component';
import { SourceOverviewWidgetComponent } from '../core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component';
import { nvD3 } from '../core/charts/nvD3/nvD3.component';
import { DashboardComponent, BookingDialogComponent, DescriptionDialogComponent } from './dashboard/dashboard.component';
import { BarChartComponent } from '../core/widgets/bar-chart/bar-chart.component';
import { LineChartComponent } from '../core/widgets/line-chart/line-chart.component';
import { RecentSalesComponent } from '../core/widgets/recent-sales/recent-sales.component';
import { PieChartComponent } from '../core/widgets/pie-chart/pie-chart.component';
import { GoogleMapsWidgetComponent } from '../core/widgets/google-maps-widget/google-maps-widget.component';
import { ActivityComponent } from '../core/widgets/activity/activity.component';
import { TrafficSourcesComponent } from '../core/widgets/traffic-sources/traffic-sources.component';
import { LoadingOverlayComponent } from '../core/loading-overlay/loading-overlay.component';
import { environment } from "../../environments/environment";
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';
import { D3ChartService } from '../core/charts/nvD3/nvD3.service';
import { CalendarModule } from 'angular-calendar';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from '../app-routing.module';
import { MaterialComponentsModule } from '../material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { HighlightModule } from '../core/highlightjs/highlight.module';
import { QuillModule } from 'ngx-quill';
import { ScrollbarModule } from '../core/scrollbar/scrollbar.module';
import { MatIconRegistry, MatStepperModule, MatTableModule, MatDialogModule, } from "@angular/material";
import { SwiperModule } from 'angular2-useful-swiper'; //or for angular-cli the path will be ../../node_modules/angular2-useful-swiper


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleApi
    }),
    QuillModule,
    HighlightModule,
    SortablejsModule,
    CalendarModule.forRoot(),
    ScrollbarModule,
    SwiperModule,
    MatDialogModule,
  ],
  entryComponents: [
    BookingDialogComponent,
    DescriptionDialogComponent
  ],
  declarations: [
    WidgetComponent,
    LineChartWidgetComponent,
    SourceOverviewWidgetComponent,
    nvD3,
    DashboardComponent,
    BarChartComponent,
    LineChartComponent,
    RecentSalesComponent,
    PieChartComponent,
    GoogleMapsWidgetComponent,
    ActivityComponent,
    TrafficSourcesComponent,
    LoadingOverlayComponent,
    BookingDialogComponent,
    DescriptionDialogComponent
  ],
  providers: [
    D3ChartService,
  ]
})
export class DemoModule { }
