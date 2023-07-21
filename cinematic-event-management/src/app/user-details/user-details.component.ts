// user-details.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userForm: FormGroup;
  isEditMode: boolean = false;
  userId: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Initialize the userForm with empty form controls
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      status: [false],
      gender: ['', Validators.required],
      membership_type: ['', Validators.required],
      bio: [''],
      date_of_birth: ['', Validators.required]
    });

    // Check if we are in edit mode or create mode
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      if (this.userId) {
        this.isEditMode = true;
        this.userService.getUser(this.userId).subscribe(user => {
          // Populate the form controls with existing user data in edit mode
          this.userForm.patchValue(user);
        });
      }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      if (this.isEditMode) {
        // Update existing user
        this.userService.updateUser(this.userId, user).subscribe(() => {
          // Navigate back to user list after successful update
          this.router.navigate(['/users']);
        });
      } else {
        // Create new user
        this.userService.createUser(user).subscribe(() => {
          // Navigate back to user list after successful creation
          this.router.navigate(['/users']);
        });
      }
    }
  }

  cancel() {
    // Navigate back to user list on cancel
    this.router.navigate(['/users']);
  }
}
