
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib290-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib290Component implements OnInit {
      constructor() { }
  
      title = 'lib290-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib290Component],
      providers: [],
      exports: [Lib290Component],
  })
  export class Lib290Module { }

