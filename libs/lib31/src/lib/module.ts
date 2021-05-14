
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib31-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib31Component implements OnInit {
      constructor() { }
  
      title = 'lib31-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib31Component],
      providers: [],
      exports: [Lib31Component],
  })
  export class Lib31Module { }

