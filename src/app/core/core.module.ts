import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './toolbar/search/search.component';
import { BreadcrumbsComponent } from './breadcrumb/breadcrumb.component';
import { AdminComponent } from './admin/admin.component';
import { QuickpanelComponent } from './quickpanel/quickpanel.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarUserButtonComponent } from './toolbar/toolbar-user-button/toolbar-user-button.component';
import { ClickOutsideDirective } from './utils/click-outside.directive';
import { SearchBarComponent } from './toolbar/search-bar/search-bar.component';
import { ToolbarNotificationsComponent } from './toolbar/toolbar-notifications/toolbar-notifications.component';
import { BreadcrumbService } from './breadcrumb/breadcrumb.service';
import { MaterialComponentsModule } from '../material-components.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ScrollbarModule } from './scrollbar/scrollbar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    FormsModule,
    ScrollbarModule
  ],
  declarations: [
    SearchComponent,
    BreadcrumbsComponent,
    AdminComponent,
    QuickpanelComponent,
    ToolbarComponent,
    ToolbarUserButtonComponent,
    ClickOutsideDirective,
    SearchBarComponent,
    ToolbarNotificationsComponent
  ],
  providers: [
    BreadcrumbService
  ]
})
export class CoreModule { }
