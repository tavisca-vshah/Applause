import { Employee } from "./../mocks/employee";
import { Injectable } from "@angular/core";
import { Rules } from "../mocks/rules";

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
    const rules = [
      {   
        id: 1,
        title: "Badges",
        rulesList: [
          {
            description : "Gold",
            points : 50
          },
          {
            description : "Silver",
            points : 25
          },
          {
            description : "Bronze",
            points : 10
          }
        ]
      },
      {  
        id: 2,
        title: "TimeSheet",
        rulesList: [
          {
            description : "Daily",
            points : 50
          },
          {
            description : "Weekly",
            points : 25
          },
          {
            description : "Monthy",
            points : 10
          }
        ]
      },
      {
        id: 3,
        title: "Git Pull Request",
        rulesList: [
          {
            description : "Review with Comments",
            points : 50
          },
          {
            description : "Review without Comments",
            points : 25
          }
        ]
      }
    ];
    return { employees, rules };
  }
  genId<T extends Employee | Rules>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
