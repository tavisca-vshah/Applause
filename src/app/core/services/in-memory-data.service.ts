import { Employee } from "../../shared/models/employee";
import { Injectable } from "@angular/core";
import { Employees } from "../mocks/mock-employees";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService {
  createDb() {
    const employees = Employees;
    return { employees };
  }

  genId(employees: Employee[]): number {
    return employees.length > 0
      ? Math.max(...employees.map(hero => hero.id)) + 1
      : 11;
  }
}
