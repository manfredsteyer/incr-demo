
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib203-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib203Component implements OnInit {
      constructor() { }
  
      title = 'lib203-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib203Component],
      providers: [],
      exports: [Lib203Component],
  })
  export class Lib203Module { }

