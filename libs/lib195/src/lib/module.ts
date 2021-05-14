
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib195-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib195Component implements OnInit {
      constructor() { }
  
      title = 'lib195-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib195Component],
      providers: [],
      exports: [Lib195Component],
  })
  export class Lib195Module { }

