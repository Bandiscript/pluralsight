import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular.module';
import { ButtonPeldak } from './buttons/button-component';
import { SelectOverviewExample } from './select/select.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { AcmeComponent } from './acme/acme.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonPeldak,
    SelectOverviewExample,
    HeroesComponent,
    AcmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
