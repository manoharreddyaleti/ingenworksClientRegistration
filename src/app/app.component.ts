import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ClientService } from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private clientService:ClientService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        clientFirstName: ['', Validators.required],
        clientLastName: ['', Validators.required],
        clientUserName: ['', Validators.required],
        gender:['male',Validators.required],
        clientEmail: ['', [Validators.required, Validators.email]],
        clientCompanyName:['',Validators.required],
        // clientCompanyAddr: ['', Validators.required],
        clientAlliesName: ['', Validators.required],
        clientPhoneNumber: ['', Validators.required],
        countryName: ['', Validators.required],
        stateName: ['', Validators.required],
        city: ['', Validators.required],
        pincode: ['', Validators.required],
        addressline1: ['', Validators.required],
        addressline2: ['',],
        loginWithSSO:[true,Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.clientService.sendClientData(this.registerForm.value).subscribe(res=>{
        console.log(res);
      })

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}

