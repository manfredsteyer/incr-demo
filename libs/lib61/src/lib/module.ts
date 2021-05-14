
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib61-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib61Component implements OnInit {
      constructor() { }
  
      title = 'lib61-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib61Component],
      providers: [],
      exports: [Lib61Component],
  })
  export class Lib61Module { }

