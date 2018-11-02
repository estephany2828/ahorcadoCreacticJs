import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { RouterModule, Routes} from '@angular/router'
import { ProfileComponent} from './profile/profile.component'
import { LoginComponent} from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';


const rutas: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: LoginComponent},
  {path: 'login',component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'perfil', component: ProfileComponent},
  {path: 'pet', component: PetsComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    LoginComponent,
    DashboardComponent,
    LoginComponent,
    InicioComponent,
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

