
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib7-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib7Component implements OnInit {
      constructor() { }
  
      title = 'lib7-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib7Component],
      providers: [],
      exports: [Lib7Component],
  })
  export class Lib7Module { }

