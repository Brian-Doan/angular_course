import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angular2-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OnSalePipe } from './on-sale.pipe';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { QRComponent } from './qr/qr.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OnSalePipe,
    CascadeSelectComponent,
    PageNotFoundComponent,
    HighlightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    GetDataComponent,
    PostDataComponent,
    ParentComponent,
    ChildComponent,
    QRComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
