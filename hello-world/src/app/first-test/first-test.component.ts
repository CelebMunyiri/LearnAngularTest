import { Component } from '@angular/core';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent {
title="This is a title"

sum(a:number,b:number){
  return a+b
}

}
