
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib294-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib294Component implements OnInit {
      constructor() { }
  
      title = 'lib294-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib294Component],
      providers: [],
      exports: [Lib294Component],
  })
  export class Lib294Module { }

