import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  loading = false;
  admins;

  constructor(private _adminService: AdminService,
                public router: Router,
                private toastr: ToastrService,
                public route: ActivatedRoute,
                public zone: NgZone) { }

  ngOnInit() {
    this.zone.run( () => 
      this._adminService.getAdmin()
      .subscribe(
        res =>{
          this.admins = res;
        },
        error => {
          this.toastr.error('Unable to load all admins')
        }
      )
    ) 
  }

  onSubmit( form: NgForm) {
    let data = {
      email: form.value.email,
      password: form.value.password,
      name: form.value.name
    }
    this.loading = true;
    this._adminService.addAdmin(data).subscribe(

      (res)=>{
        this.admins.push(data)
        this.loading = false;
        data = null;
        this.toastr.success('Admin added successfully');
      },
      (error)=>{
       this.loading = false;
       this.toastr.error(error.message);
      }

      );
          
   }

   onDelete(id){
    this._adminService.deleteAdmin(id)
      .subscribe(
        res => {
          this.ngOnInit();
          this.toastr.success('Deleted Successfully')
        },
        error=>{
          this.toastr.error('Unable to delete')
        }
      )
   }

}
