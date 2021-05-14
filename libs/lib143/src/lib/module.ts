
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib143-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib143Component implements OnInit {
      constructor() { }
  
      title = 'lib143-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib143Component],
      providers: [],
      exports: [Lib143Component],
  })
  export class Lib143Module { }

