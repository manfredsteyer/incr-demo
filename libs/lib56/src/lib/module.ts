
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib56-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib56Component implements OnInit {
      constructor() { }
  
      title = 'lib56-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib56Component],
      providers: [],
      exports: [Lib56Component],
  })
  export class Lib56Module { }

