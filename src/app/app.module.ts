import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EscritorioComponent } from './components/escritorio/escritorio.component';
import {DosComponent} from '../app/components/dos/dos.component';
import {Navbar2Component} from '../app/components/navbar2/navbar2.component';
import { HttpClientModule } from '@angular/common/http';
import { RelojComponent } from './components/reloj/reloj.component';
import { ConvertFrom24To12FormatPipe } from './pipes/convert-from24-to12-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EscritorioComponent,
    DosComponent,
    Navbar2Component,
    RelojComponent,
    ConvertFrom24To12FormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
