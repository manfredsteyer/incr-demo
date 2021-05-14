
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib170-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib170Component implements OnInit {
      constructor() { }
  
      title = 'lib170-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib170Component],
      providers: [],
      exports: [Lib170Component],
  })
  export class Lib170Module { }

