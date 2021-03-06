import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DocsComponent } from './components/docs/docs.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { CardComponent } from './components/components/card/card.component';
import { ButtonComponent } from './components/elements/button/button.component';
import { FormComponent } from './components/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import { CheckboxComponent } from './components/form/checkbox/checkbox.component';
import { RadioComponent } from './components/form/radio/radio.component';
import { InputComponent } from './components/form/input/input.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ComponentsComponent } from './components/components/components.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { CustomizeComponent } from './components/customize/customize.component';
import { SidebarJSModule } from 'ng-sidebarjs';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    DocsComponent,
    GettingStartedComponent,
    CardComponent,
    ButtonComponent,
    FormComponent,
    GridComponent,
    GridComponent,
    CheckboxComponent,
    RadioComponent,
    InputComponent,
    ElementsComponent,
    ComponentsComponent,
    UtilitiesComponent,
    CustomizeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarJSModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
