
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib157-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib157Component implements OnInit {
      constructor() { }
  
      title = 'lib157-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib157Component],
      providers: [],
      exports: [Lib157Component],
  })
  export class Lib157Module { }

