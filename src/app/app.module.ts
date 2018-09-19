import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrarComponent } from './Components/registrar/registrar.component';
import { UsuariosService } from './Services/usuarios.service';


//Rutas
const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Registrar', component: RegistrarComponent },
  { path: '**', redirectTo: 'Login' }
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
