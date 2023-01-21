import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AdminGuard } from './layout/Guard/admin.guard';
import { AdminStafGuard } from './layout/Guard/adminStaf.guard';
import { StafGuard } from './layout/Guard/staf.guard';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
};

const routes: Routes = [
    {
        path:'',
        redirectTo:'auth/login',
        pathMatch: 'full'
      },
    {
        path: '', component: AppLayoutComponent,
        canActivate:[AuthenticationGuard],
        children: [
             //master setup
            { path: 'dashboard', loadChildren: () => import('./layout/components/dashboards/dashboards.module').then(m => m.DashboardsModule) },
           
            //registation
            { path: 'user', data: { breadcrumb: 'User' }, loadChildren: () => import('./layout/components/user/user.module').then(m => m.UserModule) },
            
           
            
            { path: 'registation', data: { breadcrumb: 'Registation' }, loadChildren: () => import('./layout/components/registation/registation.module').then(m => m.RegistationModule) },
            
            
            //{ path: 'documents', data: { breadcrumb: 'Pages' }, loadChildren: () => import('./layout/components/documents/documents.module').then(m => m.DocumentsModule) },
            //{ path: 'profile', data: { breadcrumb: 'User Management' }, loadChildren: () => import('./layout/components/year/profile.module').then(m => m.ProfileModule) },

        ]
    },
    { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./layout/components/auth/auth.module').then(m => m.AuthModule) },
    { path: 'notfound', loadChildren: () => import('./layout/components/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: '**', redirectTo: '/notfound' }
   


];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
