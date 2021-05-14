
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib73-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib73Component implements OnInit {
      constructor() { }
  
      title = 'lib73-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib73Component],
      providers: [],
      exports: [Lib73Component],
  })
  export class Lib73Module { }

