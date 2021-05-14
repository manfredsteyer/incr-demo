
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib84-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib84Component implements OnInit {
      constructor() { }
  
      title = 'lib84-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib84Component],
      providers: [],
      exports: [Lib84Component],
  })
  export class Lib84Module { }

