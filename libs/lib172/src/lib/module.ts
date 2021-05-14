
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib172-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib172Component implements OnInit {
      constructor() { }
  
      title = 'lib172-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib172Component],
      providers: [],
      exports: [Lib172Component],
  })
  export class Lib172Module { }

