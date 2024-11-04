import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) { }

  logout() {
    // Xóa token JWT khỏi localStorage
    localStorage.removeItem('token');
    // Chuyển hướng về trang đăng nhập
    this.router.navigate(['']);
  }
}
