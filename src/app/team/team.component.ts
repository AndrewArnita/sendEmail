import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() name = 'Joanna';
  @Input() Job = 'Lead Programmer';
  @Input() img = 'assets/img/team/1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
