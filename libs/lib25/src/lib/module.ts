
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib25-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib25Component implements OnInit {
      constructor() { }
  
      title = 'lib25-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib25Component],
      providers: [],
      exports: [Lib25Component],
  })
  export class Lib25Module { }

