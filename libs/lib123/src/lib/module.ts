
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib123-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib123Component implements OnInit {
      constructor() { }
  
      title = 'lib123-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib123Component],
      providers: [],
      exports: [Lib123Component],
  })
  export class Lib123Module { }

