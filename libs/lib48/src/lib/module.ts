
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib48-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib48Component implements OnInit {
      constructor() { }
  
      title = 'lib48-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib48Component],
      providers: [],
      exports: [Lib48Component],
  })
  export class Lib48Module { }

