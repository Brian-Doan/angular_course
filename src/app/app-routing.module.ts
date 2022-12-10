import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CascadeSelectComponent } from './cascade-select/cascade-select.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataComponent } from './get-data/get-data.component';
import { PostDataComponent } from './post-data/post-data.component';
import { ParentComponent } from './parent/parent.component';
import { QRComponent } from './qr/qr.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cascade', component: CascadeSelectComponent },
  { path: 'template-form', component: TemplateDrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'get-data', component: GetDataComponent },
  { path: 'post-data', component: PostDataComponent },
  { path: 'parent-component', component: ParentComponent },
  { path: 'qr-code', component: QRComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
