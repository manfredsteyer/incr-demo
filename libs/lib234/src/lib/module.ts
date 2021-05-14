
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib234-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib234Component implements OnInit {
      constructor() { }
  
      title = 'lib234-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib234Component],
      providers: [],
      exports: [Lib234Component],
  })
  export class Lib234Module { }

