import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './components/master-detail/master/master.component';
import { HomeComponent } from './components/home/home.component';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'masterdetail', component: MasterComponent},
  { path: 'directives', component: DemoDirectivesComponent },
  { path: 'formtemplate', component: FormTemplateComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
