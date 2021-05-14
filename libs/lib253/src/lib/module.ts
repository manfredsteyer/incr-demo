
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib253-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib253Component implements OnInit {
      constructor() { }
  
      title = 'lib253-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib253Component],
      providers: [],
      exports: [Lib253Component],
  })
  export class Lib253Module { }

