
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib193-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib193Component implements OnInit {
      constructor() { }
  
      title = 'lib193-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib193Component],
      providers: [],
      exports: [Lib193Component],
  })
  export class Lib193Module { }

