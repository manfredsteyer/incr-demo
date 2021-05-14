
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib230-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib230Component implements OnInit {
      constructor() { }
  
      title = 'lib230-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib230Component],
      providers: [],
      exports: [Lib230Component],
  })
  export class Lib230Module { }

