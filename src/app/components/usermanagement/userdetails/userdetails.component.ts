import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../../shared/service/data.service';
import { Users } from './../../../shared/model/user';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  userId;
  loading;
  submitted = false;
  user: Users;
  userForm: FormGroup;

  userSubmitStatus = false;
  userSuccessUpdate;
  userDeleteStatus = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private titleService: Title
  ) {

    this.titleService.setTitle("Edit - User");

  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];
      this.getUser(this.userId);
    });

    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dob: "",
      activeStatus: ""
    });
  }




  get f() { return this.userForm.controls; }


  /* GET User Details - By UserId */
  getUser(id) {
    this.loading = true;
    this.dataService.getUser(id).subscribe(
      res => {
        this.user = res["data"];
        this.loading = false;

        /* Set form data for validation */
        this.userForm.setValue({
          firstName: res["data"].first_name,
          lastName: res["data"].last_name,
          email: res["data"].email,
          gender: "",
          dob: "",
          activeStatus: ""
        });

      },
      err => {
        //console.log('HTTP Error', err.error); // Need to update snackbar
        this.loading = false;
      },
      () => { });
  }

  /* Update User Details - By UserId */
  onUserUpdate() {

    this.submitted = true;
    this.userSuccessUpdate = "";
    this.userSubmitStatus = false;

    if (this.userForm.invalid) { return; }

    this.dataService.updateUser(this.userForm.getRawValue(), this.userId).subscribe(
      res => {
        this.userSubmitStatus = true;
        this.userSuccessUpdate = JSON.stringify(res);
        //this.router.navigate(["users"])
      },
      err => {
        console.log('HTTP Error', err.error)
        this.userSubmitStatus = false;
      },
      () => { });


  }

  onReset() {
    this.userForm.reset();
  }


  onUserDelete(userId: string) {
    this.userDeleteStatus = false;
    this.dataService.deleteUser(userId).subscribe(
      res => {
        this.userDeleteStatus = true;
      },
      err => {
        //console.log('HTTP Error', err.error)
        this.userDeleteStatus = false;
      },
      () => { });
  }
}
