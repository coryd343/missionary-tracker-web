import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceBase } from './service-base';
import { environment } from '../../../environments/environment';
import { MediaRequest } from '../models/media-request.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  apiBaseUrl = environment.apiBaseUrl + "/media/";
  headers = new HttpHeaders()
        //.set('Content-Type', 'multipart/form-data');

  constructor(private http: HttpClient) { }

  public postImageAsync(formData: FormData): Promise<boolean> {
    console.log("@@@Posting image to server!");
    return this.http.post<boolean>(
      this.apiBaseUrl,
      formData,
      {
        headers: this.headers
      }
    ).toPromise();
  }

  //Test using base 64 encoding instead of formdata
  /*public postImageAsync(data: MediaRequest): Promise<boolean> {
    return this.http.post<boolean>(
      this.apiBaseUrl,
      JSON.stringify(data),
      {
        headers: this.headers
      }
    ).toPromise();
  }*/
}
