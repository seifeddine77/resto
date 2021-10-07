import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-chef',
  templateUrl: './signup-chef.component.html',
  styleUrls: ['./signup-chef.component.css']
})
export class SignupChefComponent implements OnInit {
  signupChefForm:FormGroup;
  imagePreview:any;
  constructor(private fb:FormBuilder,
    private userService:UserService,
    private router:Router) { }

  ngOnInit() {
    this.signupChefForm=this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        pwd: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]],
        confirmPwd: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(8)]],
        phone: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
        role:['chef'],
        img:['']
      }
    )

  }
  signUp(){
    this.userService.signup(this.signupChefForm.value,this.signupChefForm.value.img).subscribe(
      (data)=>{
        console.log('result',data.message);
        this.router.navigate(['admin']);
        
      }
    )

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupChefForm.patchValue({ img: file });
    this.signupChefForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {this.signupChefForm
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
