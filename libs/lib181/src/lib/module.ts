
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib181-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib181Component implements OnInit {
      constructor() { }
  
      title = 'lib181-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib181Component],
      providers: [],
      exports: [Lib181Component],
  })
  export class Lib181Module { }

