
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib190-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib190Component implements OnInit {
      constructor() { }
  
      title = 'lib190-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib190Component],
      providers: [],
      exports: [Lib190Component],
  })
  export class Lib190Module { }

