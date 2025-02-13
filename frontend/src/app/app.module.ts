import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component'; // Assure-toi que ce fichier existe
import { UploadFileComponent } from './upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent, 
    UploadFileComponent // Déclare ton composant ici
  ],
  imports: [
    BrowserModule, 
    HttpClientModule // Nécessaire pour les requêtes API
  ],
  bootstrap: [AppComponent] // AppComponent doit être le composant root
})
export class AppModule { }
