
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib76-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib76Component implements OnInit {
      constructor() { }
  
      title = 'lib76-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib76Component],
      providers: [],
      exports: [Lib76Component],
  })
  export class Lib76Module { }

