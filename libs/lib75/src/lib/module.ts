
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib75-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib75Component implements OnInit {
      constructor() { }
  
      title = 'lib75-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib75Component],
      providers: [],
      exports: [Lib75Component],
  })
  export class Lib75Module { }

