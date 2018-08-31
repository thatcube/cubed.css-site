import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DocsComponent } from './components/docs/docs.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { FormComponent } from './components/form/form.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'docs', component: DocsComponent, children: [
    { path: '',   redirectTo: 'gettingstarted', pathMatch: 'full' },
    { path: 'gettingstarted', component: GettingStartedComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'card', component: CardComponent },
    { path: 'form', component: FormComponent },
    { path: 'layout', component: LayoutComponent }
  ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

