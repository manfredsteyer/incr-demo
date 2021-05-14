
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib281-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib281Component implements OnInit {
      constructor() { }
  
      title = 'lib281-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib281Component],
      providers: [],
      exports: [Lib281Component],
  })
  export class Lib281Module { }

