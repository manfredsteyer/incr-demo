
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib268-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib268Component implements OnInit {
      constructor() { }
  
      title = 'lib268-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib268Component],
      providers: [],
      exports: [Lib268Component],
  })
  export class Lib268Module { }

