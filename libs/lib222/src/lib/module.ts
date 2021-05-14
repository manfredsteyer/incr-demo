
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib222-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib222Component implements OnInit {
      constructor() { }
  
      title = 'lib222-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib222Component],
      providers: [],
      exports: [Lib222Component],
  })
  export class Lib222Module { }

