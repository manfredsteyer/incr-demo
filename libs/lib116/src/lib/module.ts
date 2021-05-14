
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib116-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib116Component implements OnInit {
      constructor() { }
  
      title = 'lib116-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib116Component],
      providers: [],
      exports: [Lib116Component],
  })
  export class Lib116Module { }

