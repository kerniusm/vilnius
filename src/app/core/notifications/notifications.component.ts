import { Component, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.component.html",
  styleUrls: ["./notifications.component.scss"]
})
export class NotificationsComponent {
  msg: any;
  constructor(public _sB: MatSnackBar) {}

  openSnackBar(msg) {
    this.msg = msg;
    this._sB.openFromComponent(NotificationsComponent, {
      duration: 500
    });
  }
}
