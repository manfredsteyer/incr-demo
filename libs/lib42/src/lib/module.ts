
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib42-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib42Component implements OnInit {
      constructor() { }
  
      title = 'lib42-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib42Component],
      providers: [],
      exports: [Lib42Component],
  })
  export class Lib42Module { }

