import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router, private http: HttpClient) { }

  logout() {
    // Xóa token JWT khỏi localStorage
    localStorage.removeItem('token');
    // Chuyển hướng về trang đăng nhập
    this.router.navigate(['']);
  }

  sendTokenToBackend() {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Kiểm tra xem token có hợp lệ không

    if (!token) {
      alert('Không tìm thấy token! Vui lòng đăng nhập lại.');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Gửi token trong header
    });

    // In ra các thành phần
    console.log('Request URL:', 'http://localhost:8080/api/auth/staff/overview');
    console.log('Request Headers:', headers);

    this.http.get('http://localhost:8080/api/auth/staff/overview', { headers })
      .subscribe({
        next: (response) => {
          console.log('Thông tin đã nhận:', response);
          alert('Thông tin đã được lấy thành công.');
        },
        error: (error) => {
          console.error('Lỗi khi lấy thông tin:', error);
          alert('Không thể lấy thông tin. Vui lòng kiểm tra lại. Lỗi: ' + error.message);
        }
      });
  }

}
