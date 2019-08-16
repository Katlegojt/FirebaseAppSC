import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-item', loadChildren: './pages/add-item/add-item.module#AddItemPageModule' },
  { path: 'edit-item', loadChildren: './pages/edit-item/edit-item.module#EditItemPageModule' },
  { path: 'delete-item', loadChildren: './pages/delete-item/delete-item.module#DeleteItemPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'one-time-pin', loadChildren: './pages/one-time-pin/one-time-pin.module#OneTimePinPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
