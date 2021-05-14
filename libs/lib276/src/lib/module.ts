
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib276-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib276Component implements OnInit {
      constructor() { }
  
      title = 'lib276-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib276Component],
      providers: [],
      exports: [Lib276Component],
  })
  export class Lib276Module { }

