import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { email: '', password: '' }; // Dữ liệu đăng nhập

  constructor(private http: HttpClient,private router: Router) {}

  login() {
    this.http.post('http://localhost:8080/api/auth/login', this.loginData, { responseType: 'text' }) // Chỉ định responseType là 'text'
      .subscribe(
        (response: string) => {
          const token = response; // Giả định API trả về token trực tiếp
          localStorage.setItem('token', token); // Lưu token vào localStorage
          console.log('Đăng nhập thành công:', response);
          // Điều hướng đến trang dashboard hoặc trang khác
          this.router.navigate(['/dashboard']); // Chuyển hướng đến dashboard

        },
        (error) => {
          console.error('Đăng nhập thất bại', error);
          // Hiển thị thông báo lỗi cho người dùng
        }
      );
  }

}
