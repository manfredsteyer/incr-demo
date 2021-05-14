
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib167-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib167Component implements OnInit {
      constructor() { }
  
      title = 'lib167-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib167Component],
      providers: [],
      exports: [Lib167Component],
  })
  export class Lib167Module { }

