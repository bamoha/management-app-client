import { Component, OnInit, NgZone } from '@angular/core';
import { StaffService } from '../../service/staff.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {

  staffs;
  singleStaff;
  singleStaffUpdate = false;
  searchString;
  name;
  image;
  address;
  phone;
  email;
  startDate;
  description;
  department;
  position;
  type;
  id;
  

  constructor(private _staffService: StaffService,
              private zone: NgZone,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.zone.run(()=>{
      this._staffService.getStaff()
      .subscribe(
        res => {

         console.log(res)
         this.staffs = res 
        }, error => {
          console.log(error)
        }
      );
    });
    
  }

  checkDetails(id){
    this.zone.run(()=>{
      this._staffService.getSingleStaff(id)
      .subscribe(
        res => {
          this.singleStaff = res;
          this.name = this.singleStaff.name;
          this.image = this.singleStaff.image;
          this.address = this.singleStaff.address;
          this.phone = this.singleStaff.phone;
          this.email = this.singleStaff.email;
          this.startDate = this.singleStaff.startDate;
          this.description = this.singleStaff.description;
          this.department = this.singleStaff.department;
          this.position = this.singleStaff.position;
          this.type = this.singleStaff.type;
          this.id = this.singleStaff._id;
        },
        error => {
          this.toastr.error('Error, Not showing details')
        }
      )
    })
  }

  deleteStaff(id){
    this.zone.run(()=>{
      this._staffService.deleteStaff(id)
        .subscribe(
          res => {
            this.ngOnInit();
            this.toastr.success('Staff Deleted')
          }, 
          error => {
            this.toastr.error('Unable to delete')
          }
        )
    })
  }

  onSubmit(d){
    let data = {
      name: this.name,
      image: this.image,
      address: this.address,
      phone: this.phone,
      email: this.email,
      startDate: this.startDate,
      description: this.description,
      department: this.department,
      position: this.position,
      type: this.type
    }
    this.zone.run(()=>{
      console.log(this.id)
      this._staffService.editStaff(data, this.id)
        .subscribe(
          res=>{
            this.ngOnInit();
            this.checkDetails(this.id);
            this.toastr.success('Edited Successfully')
          },
          error=>{
            this.toastr.error('Please try again')
          }
        )
    })
  }

}
