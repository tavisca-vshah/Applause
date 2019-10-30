import { Rules } from "./../mocks/rules";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RulesService {
  private rulesUrl = "api/rules";
  constructor(private http: HttpClient) {}
  
  getRules(): Observable<Rules[]> {
    return this.http.get<Rules[]>(this.rulesUrl);
  }
  private log(message: string) {
    console.log(`RulesService: ${message}`);
  }
}
