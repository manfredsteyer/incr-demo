
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib169-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib169Component implements OnInit {
      constructor() { }
  
      title = 'lib169-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib169Component],
      providers: [],
      exports: [Lib169Component],
  })
  export class Lib169Module { }

