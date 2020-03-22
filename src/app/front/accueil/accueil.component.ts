import { Component, OnInit } from "@angular/core";
import { PeopleService } from "../../service/people.service";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html"
})

export class AccueilComponent implements OnInit {
  peoples;
  // déclaration de ma variable peoples (elle va être initialisée plus bas)

  constructor(private peopleservice: PeopleService) {}
  // J'injecte mon service et je le nomme peopleservice

  ngOnInit(): void {
    // Au moment de l'initialisation du composant il va chercher les données avant d'afficher
    this.peopleservice.getAllPeoples().subscribe((response: Response) => {
      // J'appelle la méthode getAllPeople() que j'ai défini dans mon service ts
      // subscribe = un appel ne va pas te répondre tout des suite / Async

      this.peoples = response["results"];
      // initialisation de ma variable people déclarée en haut

      console.log(this.peoples);
    });
  }
}
