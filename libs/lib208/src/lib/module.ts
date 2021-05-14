
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib208-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib208Component implements OnInit {
      constructor() { }
  
      title = 'lib208-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib208Component],
      providers: [],
      exports: [Lib208Component],
  })
  export class Lib208Module { }

