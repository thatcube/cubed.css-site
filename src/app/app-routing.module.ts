import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from "./components/home/home.component";
import { DocsComponent } from './components/docs/docs.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { CardComponent } from './components/components/card/card.component';
import { ButtonComponent } from './components/elements/button/button.component';
import { FormComponent } from './components/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import { RadioComponent } from './components/form/radio/radio.component';
import { ComponentsComponent } from './components/components/components.component';
import { CheckboxComponent } from './components/form/checkbox/checkbox.component';
import { ElementsComponent } from './components/elements/elements.component';
import { InputComponent } from './components/form/input/input.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { CustomizeComponent } from './components/customize/customize.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'docs', component: DocsComponent, children: [
      { path: '', redirectTo: 'gettingstarted', pathMatch: 'full' },
      { path: 'gettingstarted', component: GettingStartedComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'card', component: CardComponent },
      { path: 'form', component: FormComponent },
      { path: 'grid', component: GridComponent },
      { path: 'radio', component: RadioComponent },
      { path: 'input', component: InputComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'elements', component: ElementsComponent },
      { path: 'utilities', component: UtilitiesComponent },
      { path: 'customize', component: CustomizeComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

