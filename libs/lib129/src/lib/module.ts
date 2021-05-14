
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib129-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib129Component implements OnInit {
      constructor() { }
  
      title = 'lib129-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib129Component],
      providers: [],
      exports: [Lib129Component],
  })
  export class Lib129Module { }

