import { EmployeeService } from "./../../core/services/employee.service";
import { Component, OnInit } from "@angular/core";
import { Employee } from "../../core/mocks/employee";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  employees: {
    id: number;
    name: string;
    email: string;
    photoUri: string;
    tribe: string;
    points: number;
    badge: string;
  }[];

  page = 1;
  pageSize = 18;
  //Employee[];

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    //  this.getHeroes();

    this.employees = [
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/2.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/3.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/4.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/5.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/6.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/7.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/2.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/3.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/4.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/5.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/6.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/7.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/2.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/3.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/4.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/5.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/6.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/7.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/2.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/3.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/4.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/5.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/6.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/7.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/2.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/3.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/4.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/5.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/6.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/7.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/2.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/3.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/4.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/5.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/6.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/7.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/2.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/3.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "goldmedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/4.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/5.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "silvermedal2"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/6.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal"
      },
      {
        id: 1100,
        name: "Sundesh Chawla",
        email: "schawla@gmail.com",
        photoUri: "assets/images/users/7.jpg",
        tribe: "Enablement",
        points: 3000,
        badge: "bronzemedal2"
      }
    ];
  }

  // page = 4;
  // page2 = 1;
  // currentPage = 3;
  // disablepage = 3;
  // isDisabled = true;

  // getHeroes(): void {
  //   this.empService
  //     .getEmployees()
  //     .subscribe(heroes => (this.employees = heroes));
  // }
}
