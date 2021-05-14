
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib212-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib212Component implements OnInit {
      constructor() { }
  
      title = 'lib212-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib212Component],
      providers: [],
      exports: [Lib212Component],
  })
  export class Lib212Module { }

