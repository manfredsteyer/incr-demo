
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib54-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib54Component implements OnInit {
      constructor() { }
  
      title = 'lib54-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib54Component],
      providers: [],
      exports: [Lib54Component],
  })
  export class Lib54Module { }

