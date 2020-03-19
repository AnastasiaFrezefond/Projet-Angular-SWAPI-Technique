import { Component, OnInit } from "@angular/core";
import { PeopleService } from "../../service/people.service";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html"
})
export class AccueilComponent implements OnInit {
  peoples;

  constructor(private service: PeopleService) {}

  ngOnInit(): void {
    this.service.getAllPeoples().subscribe((response: Response) => {
      this.peoples = response;
      console.log(this.peoples);
      console.log("bonjour ça va");
    });
  }
}
