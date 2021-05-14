
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib45-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib45Component implements OnInit {
      constructor() { }
  
      title = 'lib45-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib45Component],
      providers: [],
      exports: [Lib45Component],
  })
  export class Lib45Module { }

