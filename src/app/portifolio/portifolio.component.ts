import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portifolio",
  templateUrl: "./portifolio.component.html",
  styleUrls: ["./portifolio.component.css"]
})
export class PortifolioComponent implements OnInit {
  public omeqm = false;
  public btd = false;

  constructor() {}

  ngOnInit() {}
  irbtd() {
    this.btd = !this.btd;
  }
  iromeqm() {
    this.omeqm = !this.omeqm;
    console.log(this.omeqm);
  }
}
