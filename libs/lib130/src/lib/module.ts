
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib130-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib130Component implements OnInit {
      constructor() { }
  
      title = 'lib130-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib130Component],
      providers: [],
      exports: [Lib130Component],
  })
  export class Lib130Module { }

