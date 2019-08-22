import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// w sekcji importu dodajemy import FormsModule
import { FormsModule } from '@angular/forms';
// do obsługi daty w polskiej lokalizacji
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // do tablicy imporst dodajemy moduł
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
