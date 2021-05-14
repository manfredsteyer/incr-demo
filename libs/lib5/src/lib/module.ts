
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib5-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib5Component implements OnInit {
      constructor() { }
  
      title = 'lib5-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib5Component],
      providers: [],
      exports: [Lib5Component],
  })
  export class Lib5Module { }

