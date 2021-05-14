
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib287-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib287Component implements OnInit {
      constructor() { }
  
      title = 'lib287-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib287Component],
      providers: [],
      exports: [Lib287Component],
  })
  export class Lib287Module { }

