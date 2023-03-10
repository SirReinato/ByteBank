import { NovaTransferenciaComponet } from './nova-transferencia/nova-transferencia.componet';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE } from "@angular/core";
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponet,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
