
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib151-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib151Component implements OnInit {
      constructor() { }
  
      title = 'lib151-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib151Component],
      providers: [],
      exports: [Lib151Component],
  })
  export class Lib151Module { }

