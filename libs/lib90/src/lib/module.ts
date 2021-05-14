
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib90-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib90Component implements OnInit {
      constructor() { }
  
      title = 'lib90-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib90Component],
      providers: [],
      exports: [Lib90Component],
  })
  export class Lib90Module { }

