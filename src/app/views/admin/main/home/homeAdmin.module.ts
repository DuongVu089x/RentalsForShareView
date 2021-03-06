import { ShareDialogUserComponent } from './../../shared/share-dialog-user/share-dialog-user.component';
import { MdTabsModule, MdDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
    MdTableModule,
    MdInputModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdPaginator,
    MdPaginatorModule,
    MdSelectModule,
    MdRadioModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { MotelService } from '../../../../core/services/motel/motel.service';
import { DataService } from '../../../../core/services/data/data.service';

const homeRoutes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(homeRoutes),
        MdTableModule,
        MdInputModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdSelectModule,
        MdRadioModule,
        MdPaginatorModule,
        MdDialogModule,
        FlexLayoutModule,
        FileUploadModule
    ],
    declarations: [HomeComponent, ShareDialogUserComponent],
    entryComponents: [ShareDialogUserComponent],
    providers: [DataService, MotelService]
})
export class HomeModule { }
