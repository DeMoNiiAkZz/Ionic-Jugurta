import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { ConnexionPageRoutingModule } from './connexion-routing.module';
import { ConnexionPage } from './connexion.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ConnexionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
