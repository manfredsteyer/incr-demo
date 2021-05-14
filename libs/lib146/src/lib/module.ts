
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib146-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib146Component implements OnInit {
      constructor() { }
  
      title = 'lib146-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib146Component],
      providers: [],
      exports: [Lib146Component],
  })
  export class Lib146Module { }

