import { AuthenticationService } from './../../../core/services/authentication/authentication.service';
import { FooterComponent } from './../../share/footer/footer.component';
import { MdInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdListModule } from '@angular/material';
import { MdToolbarModule, MdIconModule, MdSidenavModule, MdExpansionModule, MdTableModule } from '@angular/material';
import { mainRoutes } from './main.routes';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidebarMenuComponent } from '../shared/sidebar-menu/sidebar-menu.component';
import { TopMenuComponent } from '../shared/top-menu/top-menu.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes),
    FormsModule,
    ReactiveFormsModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdSidenavModule,
    MdExpansionModule,
    MdListModule
  ],
  declarations: [MainComponent, SidebarMenuComponent, TopMenuComponent, FooterComponent],
})
export class MainModule { }
