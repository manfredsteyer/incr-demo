
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib210-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib210Component implements OnInit {
      constructor() { }
  
      title = 'lib210-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib210Component],
      providers: [],
      exports: [Lib210Component],
  })
  export class Lib210Module { }

