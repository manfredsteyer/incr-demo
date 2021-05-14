
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib21-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib21Component implements OnInit {
      constructor() { }
  
      title = 'lib21-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib21Component],
      providers: [],
      exports: [Lib21Component],
  })
  export class Lib21Module { }

