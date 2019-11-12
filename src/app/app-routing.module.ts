
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'menuadmin', loadChildren: './pages/menuadmin/menuadmin.module#MenuadminPageModule' },
  { path: 'createempresa', loadChildren: './pages/createempresa/createempresa.module#CreateempresaPageModule' },
  { path: 'registeruser', loadChildren: './pages/registeruser/registeruser.module#RegisteruserPageModule' },
  { path: 'allempresas', loadChildren: './pages/allempresas/allempresas.module#AllempresasPageModule' },
  { path: 'updateempresa/:id', loadChildren: './pages/updateempresa/updateempresa.module#UpdateempresaPageModule' },
  { path: 'arreglar', loadChildren: './pages/arreglar/arreglar.module#ArreglarPageModule' },
  { path: 'agregar', loadChildren: './pages/agregar/agregar.module#AgregarPageModule' },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
