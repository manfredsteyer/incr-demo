
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib298-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib298Component implements OnInit {
      constructor() { }
  
      title = 'lib298-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib298Component],
      providers: [],
      exports: [Lib298Component],
  })
  export class Lib298Module { }

