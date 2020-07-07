import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }
  sendClientData(data){
    return this.http.post(environment.apiUrl+'insertClientData',data)
    .pipe(map((response: any) => response));
  }
}
