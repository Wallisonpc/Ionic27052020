import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { async } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

async getPosts (){
  let response = await this.http.get("https://jsonplaceholder.typicode.com/posts").toPromise();
  //console.log(response)
  return response;

   }
}

