import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Permet d'injecter ce service automatiquement dans toute l'application
})
export class FileUploadService {


  private backendUrl = 'http://localhost:3000/kraken'; // URL du backend

  constructor(private http: HttpClient) {}

  uploadData(data: any[]): Observable<any> {
    return this.http.post(this.backendUrl, data);
  }
}
