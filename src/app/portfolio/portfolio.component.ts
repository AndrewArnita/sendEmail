import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @Input() title = 'Threads';
  @Input() description = 'Illustration';
  @Input() img = 'assets/img/portfolio/01-thumbnail.jpg';
  constructor() { }

  ngOnInit(): void {
  }
  
}