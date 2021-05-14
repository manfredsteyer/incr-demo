
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib296-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib296Component implements OnInit {
      constructor() { }
  
      title = 'lib296-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib296Component],
      providers: [],
      exports: [Lib296Component],
  })
  export class Lib296Module { }

