
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib255-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib255Component implements OnInit {
      constructor() { }
  
      title = 'lib255-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib255Component],
      providers: [],
      exports: [Lib255Component],
  })
  export class Lib255Module { }

