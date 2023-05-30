import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
