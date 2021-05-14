
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib109-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib109Component implements OnInit {
      constructor() { }
  
      title = 'lib109-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib109Component],
      providers: [],
      exports: [Lib109Component],
  })
  export class Lib109Module { }

