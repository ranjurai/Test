import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitRepoService {

  constructor(private httpClient: HttpClient) { }


  getAllRespos(searchText: string): Observable<any> {
    return this.httpClient.get(`https://api.github.com/search/repositories?q=${searchText}`);
  }
}
