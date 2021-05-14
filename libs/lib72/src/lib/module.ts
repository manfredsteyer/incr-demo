
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib72-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib72Component implements OnInit {
      constructor() { }
  
      title = 'lib72-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib72Component],
      providers: [],
      exports: [Lib72Component],
  })
  export class Lib72Module { }

