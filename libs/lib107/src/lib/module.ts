
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib107-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib107Component implements OnInit {
      constructor() { }
  
      title = 'lib107-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib107Component],
      providers: [],
      exports: [Lib107Component],
  })
  export class Lib107Module { }

