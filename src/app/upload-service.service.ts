import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Folder} from "./folder";

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {
  SERVER_URL: string = "http://localhost:8090/Comparator";  

  constructor(private httpClient:HttpClient ,private router:Router) {
   
   }

  public getComparisonResult(formData){
    return this.httpClient.post(this.SERVER_URL+"/result", formData);
  }
}
