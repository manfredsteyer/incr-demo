
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib248-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib248Component implements OnInit {
      constructor() { }
  
      title = 'lib248-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib248Component],
      providers: [],
      exports: [Lib248Component],
  })
  export class Lib248Module { }

