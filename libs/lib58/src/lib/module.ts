
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib58-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib58Component implements OnInit {
      constructor() { }
  
      title = 'lib58-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib58Component],
      providers: [],
      exports: [Lib58Component],
  })
  export class Lib58Module { }

