import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from '../pages/custom-layout/components/custom-layout/custom-layout.component';

const routes: Routes = [
 
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('../pages/custom-layout/custom-layout.module').then(m =>m.CustomLayoutModule)

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
