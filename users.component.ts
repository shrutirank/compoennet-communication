import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 // @Input () hero:any
 @Input ('parentText') parentTextBoxValue:any ;
 
 @Input() parentClick!: Subject<void>;
 @Output('onTextFromChild') passtoparent:EventEmitter<string>=new EventEmitter<string>();

 clickCount=0;
  childTextboxvalue!: string;
  
  constructor() { }

  ngOnInit(): void {
    this.parentClick.subscribe(()=>this.incrementvalue())
  }
  incrementvalue(){
     this.clickCount=this.clickCount +1;
  }
  passtextvaluetoparent(){
    this.passtoparent.emit(this.childTextboxvalue)
  }
}
