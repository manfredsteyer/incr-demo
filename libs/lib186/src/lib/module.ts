
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib186-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib186Component implements OnInit {
      constructor() { }
  
      title = 'lib186-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib186Component],
      providers: [],
      exports: [Lib186Component],
  })
  export class Lib186Module { }

