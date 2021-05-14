
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib297-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib297Component implements OnInit {
      constructor() { }
  
      title = 'lib297-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib297Component],
      providers: [],
      exports: [Lib297Component],
  })
  export class Lib297Module { }

