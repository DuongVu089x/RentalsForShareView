import { UserDetailComponent } from './user-detail.component';
import { EqualValidator } from './../../../../core/directives/equal-validator.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MdInputModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule, MdCheckboxModule, MdTabsModule, MdFormFieldModule } from "@angular/material";

export const userDetailRoutes: Routes = [
    {
        path: '', component: UserDetailComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdInputModule,
        MdGridListModule,
        MdIconModule,
        MdToolbarModule,
        MdButtonModule,
        MdCheckboxModule,
        MdFormFieldModule,
        MdTabsModule,
        FlexLayoutModule,
        RouterModule.forChild(userDetailRoutes)
    ],
    declarations: [UserDetailComponent],
    providers: [],
    exports: [
        UserDetailComponent
    ]
})
export class UserDetailModule { }
