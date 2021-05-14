
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib168-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib168Component implements OnInit {
      constructor() { }
  
      title = 'lib168-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib168Component],
      providers: [],
      exports: [Lib168Component],
  })
  export class Lib168Module { }

