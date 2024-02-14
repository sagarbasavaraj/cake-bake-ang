import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'cake-bake-ang-entry',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './entry.component.html',
})
export class EntryComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['/order/order-in']);
  }
}