import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {PeopleService} from "../../service/people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {
  people;

  constructor(
      private router : ActivatedRoute ,
      private service : PeopleService)
  { }
  ngOnInit(): void {
    this.router.paramMap.subscribe( (params) =>{
      const name = params.get("name");
      console.log(name)
      this.service.getPeopleByName(name)
      .subscribe( (response : Response) => {
        this.people = response;
        console.log(this.people);
      })
    })
  }
}
