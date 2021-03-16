import { ContactMe } from './../Models/ContactMe';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  cm : ContactMe = new ContactMe();
  constructor(private apiCaller: HttpClient) { }

  ngOnInit(): void {
  }

  sendEmailTo(){
    alert("Thank you for registering, an email will appear in your inbox shortly :)");
    const headers= new HttpHeaders({
            "Content-Type": "application/json"
          });
      
    const options = {headers: headers};
    let user = {
      email: this.cm.email,
      // subject: this.cm.subject,
      // message: this.cm.message
    }
    this.apiCaller.post("http://localhost:3000/sendEmail", user, options).subscribe(() => {
      this.cm.email = '';
      // this.cm.subject = '';
      // this.cm.message = '';
    });
    window.location.reload();
  }
}



    
//     alert("Email sent by " + this.cm.email + " was successfully received by Andrew!");
//     const headers= new HttpHeaders({
//       "Content-Type": "application/json"
//     });

//     const options = {headers: headers};

//     this.apiCaller.post(
//       'http://localhost:3000/sendEmail',
//       this.cm,
//       options
//     ).subscribe(() => {
//       this.cm.email = '';
//       this.cm.subject = '';
//       this.cm.message = '';
//     })
//     window.location.reload()
//   }
// }
