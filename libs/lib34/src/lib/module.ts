
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib34-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib34Component implements OnInit {
      constructor() { }
  
      title = 'lib34-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib34Component],
      providers: [],
      exports: [Lib34Component],
  })
  export class Lib34Module { }

