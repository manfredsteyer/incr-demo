
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib267-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib267Component implements OnInit {
      constructor() { }
  
      title = 'lib267-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib267Component],
      providers: [],
      exports: [Lib267Component],
  })
  export class Lib267Module { }

