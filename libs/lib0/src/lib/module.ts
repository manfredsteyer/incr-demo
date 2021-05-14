
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib0-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib0Component implements OnInit {
      constructor() { }
  
      title = 'lib0-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib0Component],
      providers: [],
      exports: [Lib0Component],
  })
  export class Lib0Module { }

