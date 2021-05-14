
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib15-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib15Component implements OnInit {
      constructor() { }
  
      title = 'lib15-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib15Component],
      providers: [],
      exports: [Lib15Component],
  })
  export class Lib15Module { }

