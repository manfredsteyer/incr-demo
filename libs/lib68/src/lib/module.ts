
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib68-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib68Component implements OnInit {
      constructor() { }
  
      title = 'lib68-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib68Component],
      providers: [],
      exports: [Lib68Component],
  })
  export class Lib68Module { }

