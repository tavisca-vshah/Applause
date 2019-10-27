import { Employee } from "./../mocks/employee";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private heroesUrl = "api/employees";
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.heroesUrl);
  }

  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
