
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib191-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib191Component implements OnInit {
      constructor() { }
  
      title = 'lib191-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib191Component],
      providers: [],
      exports: [Lib191Component],
  })
  export class Lib191Module { }

