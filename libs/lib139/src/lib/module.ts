
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib139-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib139Component implements OnInit {
      constructor() { }
  
      title = 'lib139-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib139Component],
      providers: [],
      exports: [Lib139Component],
  })
  export class Lib139Module { }

