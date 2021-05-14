
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib57-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib57Component implements OnInit {
      constructor() { }
  
      title = 'lib57-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib57Component],
      providers: [],
      exports: [Lib57Component],
  })
  export class Lib57Module { }

