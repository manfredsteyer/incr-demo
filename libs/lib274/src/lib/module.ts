
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib274-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib274Component implements OnInit {
      constructor() { }
  
      title = 'lib274-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib274Component],
      providers: [],
      exports: [Lib274Component],
  })
  export class Lib274Module { }

