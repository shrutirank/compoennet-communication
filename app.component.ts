import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communicaion';
  
  // data={
  //   name:'shruti',age:20
  // }
  parentTxtValue:any

  parentClick:Subject<void>=new Subject<void>();
  childTextboxvalue!: String;

  onParent(){
    this.parentClick.next();
  }


  updateinchildvalue(_event: any){
 this.childTextboxvalue=_event;
  }

}
