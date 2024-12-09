import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterComponent } from './components/master-detail/master/master.component';
import { DetailComponent } from './components/master-detail/detail/detail.component';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { HomeComponent } from './components/home/home.component';
import { SortPipe } from './pipes/sort.pipe';
import { SionoPipe } from './pipes/siono.pipe';
import { TransformcolorDirective } from './directives/transformcolor.directive';
import { DemoDirectivesComponent } from './components/demo-directives/demo-directives.component';
import { ShowIfDirective } from './directives/show-if.directive';
import { CoreService } from './services/core.service';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerListComponent } from './components/customer/customer-list.component';
import { CustomerDetailComponent } from './components/customer/customer-detail.component';


registerLocaleData(localeEs, 'es');


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AboutComponent,
    PrivacyComponent,
    MasterComponent,
    DetailComponent,
    HomeComponent,
    SortPipe,
    SionoPipe,
    TransformcolorDirective,
    DemoDirectivesComponent,
    ShowIfDirective,
    FormTemplateComponent,
    FormReactiveComponent,
    CustomerListComponent,
    CustomerDetailComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, SionoPipe, CoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
