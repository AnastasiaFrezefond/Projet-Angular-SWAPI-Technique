import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PeopleService {
  url = "https://swapi.co/api/people";

  constructor(private http: HttpClient) { }

  getAllPeoples()
  {
    return this.http.get(this.url);
  }
  getPeopleByName(name)
  {
    return this.http.get(this.url + "/" + name);
  }
}
