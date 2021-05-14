
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib88-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib88Component implements OnInit {
      constructor() { }
  
      title = 'lib88-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib88Component],
      providers: [],
      exports: [Lib88Component],
  })
  export class Lib88Module { }

