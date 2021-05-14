
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib220-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib220Component implements OnInit {
      constructor() { }
  
      title = 'lib220-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib220Component],
      providers: [],
      exports: [Lib220Component],
  })
  export class Lib220Module { }

