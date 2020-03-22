import { Injectable } from "@angular/core";
// ma classe service va avoir besoin de faire des appels vers une API
import { HttpClient } from "@angular/common/http";
// C'est une class qui contient les différente méthode REST ( GET POST DELETE PUT )
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
// pour dire que ce service est injectable

export class PeopleService {
  url = "https://swapi.co/api/people";

  constructor(private http: HttpClient) { }
  // Constructor = creation d'un objet

  getAllPeoples(): Observable<any>
  {
    return this.http.get(this.url);
  }
  getPeopleById(id : string): Observable<any>
  {
    return this.http.get(this.url + "/" + id);
  }
}
