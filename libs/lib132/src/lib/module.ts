
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib132-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib132Component implements OnInit {
      constructor() { }
  
      title = 'lib132-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib132Component],
      providers: [],
      exports: [Lib132Component],
  })
  export class Lib132Module { }

