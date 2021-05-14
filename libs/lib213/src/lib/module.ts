
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib213-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib213Component implements OnInit {
      constructor() { }
  
      title = 'lib213-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib213Component],
      providers: [],
      exports: [Lib213Component],
  })
  export class Lib213Module { }

