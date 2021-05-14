
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib81-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib81Component implements OnInit {
      constructor() { }
  
      title = 'lib81-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib81Component],
      providers: [],
      exports: [Lib81Component],
  })
  export class Lib81Module { }

