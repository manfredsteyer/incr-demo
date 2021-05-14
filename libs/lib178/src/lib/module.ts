
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib178-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib178Component implements OnInit {
      constructor() { }
  
      title = 'lib178-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib178Component],
      providers: [],
      exports: [Lib178Component],
  })
  export class Lib178Module { }

