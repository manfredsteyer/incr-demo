
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib283-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib283Component implements OnInit {
      constructor() { }
  
      title = 'lib283-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib283Component],
      providers: [],
      exports: [Lib283Component],
  })
  export class Lib283Module { }

