import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = { staffName: '', staffEmail: '', staffPassword: '',roleId:3 };

  constructor(private http: HttpClient, private router: Router) { }

  register() {
    this.http.post('http://localhost:8080/api/auth/register/staff', this.registerData, { observe: 'response' })
      .subscribe({
        next: (response) => {
          if (response.status === 200) {
            console.log('Đăng ký thành công:', response.body);
            // Chuyển hướng đến trang đăng nhập sau khi đăng ký thành công
            alert('Đăng ký thành công .ok đẹp zai.');
            setTimeout(() => { this.router.navigate(['']); }, 1);
          } else {
            console.error('Đăng ký thất bại:', response);
            alert('Đăng ký thất bại. Vui lòng kiểm tra thông tin.');
          }
        },
        error: (error) => {
          console.error('Đăng ký thất bại:', error);
          alert('Đăng ký thất bại. Vui lòng kiểm tra thông tin.');
        }
      });
  }

}
