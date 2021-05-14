
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib265-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib265Component implements OnInit {
      constructor() { }
  
      title = 'lib265-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib265Component],
      providers: [],
      exports: [Lib265Component],
  })
  export class Lib265Module { }

