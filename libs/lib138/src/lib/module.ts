
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib138-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib138Component implements OnInit {
      constructor() { }
  
      title = 'lib138-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib138Component],
      providers: [],
      exports: [Lib138Component],
  })
  export class Lib138Module { }

