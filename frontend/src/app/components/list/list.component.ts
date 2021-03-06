import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {ButtonItem} from "../../models/top-bar";
import {Lesson} from "../../models/lesson";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data;
  @Input() cardButtons: ButtonItem[];

  constructor() { }

  ngOnInit() {
  }

}
