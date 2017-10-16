import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

export const adminRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/loginAdmin.module#LoginModule' },
    { path: 'main', loadChildren: './main/main.module#MainModule' }
];
