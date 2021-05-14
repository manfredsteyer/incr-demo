
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib14-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib14Component implements OnInit {
      constructor() { }
  
      title = 'lib14-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib14Component],
      providers: [],
      exports: [Lib14Component],
  })
  export class Lib14Module { }

