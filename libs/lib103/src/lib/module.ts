
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib103-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib103Component implements OnInit {
      constructor() { }
  
      title = 'lib103-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib103Component],
      providers: [],
      exports: [Lib103Component],
  })
  export class Lib103Module { }

