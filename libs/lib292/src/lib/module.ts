
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib292-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib292Component implements OnInit {
      constructor() { }
  
      title = 'lib292-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib292Component],
      providers: [],
      exports: [Lib292Component],
  })
  export class Lib292Module { }

