import { Component, OnInit } from "@angular/core";

@Component({
  selector: "honour-banner",
  templateUrl: "./honour-banner.component.html",
  styleUrls: ["./honour-banner.component.css"]
})
export class HonourBannerComponent implements OnInit {
  employees: {
    id: number;
    name: string;
    email: string;
    photoUri: string;
    tribe: string;
    points: number;
    badge: string;
  }[];

  constructor() {}

  ngOnInit() {
    this.employees = [
      {
        id: 1100,
        name: "vikram shah",
        email: "vshah@gmail.com",
        photoUri: "assets/images/users/2.jpg",
        tribe: "Enablement",
        points: 4500,
        badge: "goldmedal"
      },
      {
        id: 1100,
        name: "vikram shah",
        email: "vshah@gmail.com",
        photoUri: "assets/images/users/3.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal2"
      },
      {
        id: 1100,
        name: "vikram shah",
        email: "vshah@gmail.com",
        photoUri: "assets/images/users/4.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal"
      },
      {
        id: 1100,
        name: "vikram shah",
        email: "vshah@gmail.com",
        photoUri: "assets/images/users/5.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal2"
      },
      {
        id: 1100,
        name: "vikram shah",
        email: "vshah@gmail.com",
        photoUri: "assets/images/users/6.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal"
      },
      {
        id: 1100,
        name: "vikram shah",
        email: "vshah@gmail.com",
        photoUri: "assets/images/users/7.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal2"
      }
    ];
  }
}
