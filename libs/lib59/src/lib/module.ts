
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib59-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib59Component implements OnInit {
      constructor() { }
  
      title = 'lib59-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib59Component],
      providers: [],
      exports: [Lib59Component],
  })
  export class Lib59Module { }

