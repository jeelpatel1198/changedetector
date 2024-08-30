import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users = new BehaviorSubject(['Angular','React','HTML']);

  ngOnInit(): void {
  
  }
  
  addUser(user:any){
    this.users.next(user);
    // this.users = [...this.users,user]
  }
  
}
