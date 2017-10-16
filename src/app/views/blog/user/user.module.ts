import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MdCardModule,
    MdTabsModule,
    MdTableModule,
    MdPaginatorModule,
    MdButtonModule,
    MdIconModule,
    MdSelectModule,
    MdRadioModule,
    MdInputModule
} from '@angular/material';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';

export const userRoutes: Routes = [
    {
        path: '', component: UserComponent, children: [
            {
                path: '', redirectTo: 'login'
            },
            {
                path: 'login', loadChildren: './login/login.module#LoginModule'
            },
            {
                path: 'register', loadChildren: './register/register.module#RegisterModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes),
        MdCardModule,
        MdTabsModule,
        MdIconModule,
        MdTableModule,
        MdPaginatorModule,
        MdInputModule,
        MdButtonModule,
        MdSelectModule,
        MdRadioModule,
        FileUploadModule,
        FlexLayoutModule
    ],
    declarations: [
        UserComponent,
        UserDetailComponent
    ],
    // providers: [DataService]
})
export class UserModule { }
