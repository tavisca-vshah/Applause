import { Employee } from "./../mocks/employee";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService {
  createDb() {
    const employees = [
      {
        id: 11,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      },
      {
        id: 12,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      },
      {
        id: 13,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      },
      {
        id: 14,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      },
      {
        id: 15,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      },
      {
        id: 16,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      },
      {
        id: 17,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      },
      {
        id: 18,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      },
      {
        id: 19,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      },
      {
        id: 20,
        name: "Dr Nice",
        email: "bsus@gmail.com",
        tribe: "Enablement",
        points: 4000,
        photoUrl: "assets/images/medal.png"
      }
    ];
    return { employees };
  }

  genId(employees: Employee[]): number {
    return employees.length > 0
      ? Math.max(...employees.map(hero => hero.id)) + 1
      : 11;
  }
}
