import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadoModule } from './contador/contador.module';



@NgModule({
  declarations: [
    AppComponent,     
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }