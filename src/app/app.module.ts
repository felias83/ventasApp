import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EmpresaDetalleComponent } from './components/empresa-detalle/empresa-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    EmpresaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
