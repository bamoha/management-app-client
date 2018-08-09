import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StaffService } from '../../service/staff.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  staffModel={};
  image;
  constructor(private _staffService: StaffService,
                public router: Router,
                private toastr: ToastrService,
                public route: ActivatedRoute) { }

  ngOnInit() {
  }


  onFileChange(event){
    this.image =  event.target.files[0]
  }
  

  onSubmit( form: NgForm) {

    let data = {
      name: form.value.name,
      address: form.value.address,
      phone: form.value.phone,
      email: form.value.email,
      startDate: form.value.startDate,
      description: form.value.description,
      department: form.value.department,
      position: form.value.position,
      type: form.value.type
    }

    console.log(data)

    this._staffService.addStaff(data).subscribe(

      (res)=>{
        this.toastr.success('Successfully added Staff');
        this.router.navigate(['/staffs'])
      },
      (error)=>{
       
       this.toastr.error('Try again');
      }

      );
          
   }

}
