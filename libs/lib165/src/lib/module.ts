
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib165-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib165Component implements OnInit {
      constructor() { }
  
      title = 'lib165-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib165Component],
      providers: [],
      exports: [Lib165Component],
  })
  export class Lib165Module { }

