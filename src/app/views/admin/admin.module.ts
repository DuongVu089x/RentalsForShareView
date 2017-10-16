import { AdminComponent } from './admin.component';
import { adminRoutes } from './admin.routes';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(adminRoutes),
    PaginationModule.forRoot()
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
