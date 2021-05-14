
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib40-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib40Component implements OnInit {
      constructor() { }
  
      title = 'lib40-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib40Component],
      providers: [],
      exports: [Lib40Component],
  })
  export class Lib40Module { }

