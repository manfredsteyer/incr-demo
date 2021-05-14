
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib272-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib272Component implements OnInit {
      constructor() { }
  
      title = 'lib272-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib272Component],
      providers: [],
      exports: [Lib272Component],
  })
  export class Lib272Module { }

