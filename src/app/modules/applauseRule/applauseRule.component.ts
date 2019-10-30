import { Component, OnInit } from '@angular/core';
import { Rules } from "../../core/mocks/rules";
import { RulesService } from '../../core/services/rules.service';
@Component({
  selector: 'app-applauseRule',
  templateUrl: './applauseRule.component.html',
  styleUrls: ['./applauseRule.component.css']
})
export class ApplauseRuleComponent implements OnInit {
  rules : Rules[];
  constructor(private rulesServices : RulesService) { }

  ngOnInit() {
    this.getRule();
  }
  getRule(): void {
    this.rulesServices.getRules().subscribe(rule => (this.rules = rule));
  }
}
