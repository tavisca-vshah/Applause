import { Employee } from "./../../../core/mocks/employee";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reward-card",
  templateUrl: "./reward-card.component.html",
  styleUrls: ["./reward-card.component.css"]
})
export class RewardCardComponent implements OnInit {
  description: string = `With dedication and hard work, Smriti learned different aspects of the
  tools (ChatOps, PAGER, Consul sync). She is always ready to take up new
  challenges and do her best to complete them. Her commitment to learning
  docker and lambda for ChatOps migration to .Net Core is commendable.
  Kudos to her for all the efforts. Keep up the good work!!`;
  ngOnInit() {}
}
