
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib77-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib77Component implements OnInit {
      constructor() { }
  
      title = 'lib77-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib77Component],
      providers: [],
      exports: [Lib77Component],
  })
  export class Lib77Module { }

