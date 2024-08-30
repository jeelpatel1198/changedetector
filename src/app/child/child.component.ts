import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, DoCheck {
 
 @Input() data!:Observable<any>;

  developer:string[]=[];
  constructor(private cd:ChangeDetectorRef){
   
  }
  ngDoCheck(): void {
   
  }
  ngOnInit(): void {
    this.data.subscribe(res=>{
      console.log(res)
      this.developer = [...this.developer,...res];
      this.cd.markForCheck();
    })
  }
 
}
