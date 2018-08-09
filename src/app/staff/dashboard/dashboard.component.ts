import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import {  ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService,
              public toastr: ToastrService,
              public admin: AdminService,
              public router: Router,) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout()
    this.router.navigate(['/home']);
    this.toastr.success('Logged out Successfully')
  }

}
