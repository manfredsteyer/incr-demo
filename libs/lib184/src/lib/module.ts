
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib184-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib184Component implements OnInit {
      constructor() { }
  
      title = 'lib184-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib184Component],
      providers: [],
      exports: [Lib184Component],
  })
  export class Lib184Module { }

