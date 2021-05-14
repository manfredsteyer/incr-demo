
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib93-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib93Component implements OnInit {
      constructor() { }
  
      title = 'lib93-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib93Component],
      providers: [],
      exports: [Lib93Component],
  })
  export class Lib93Module { }

