
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib134-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib134Component implements OnInit {
      constructor() { }
  
      title = 'lib134-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib134Component],
      providers: [],
      exports: [Lib134Component],
  })
  export class Lib134Module { }

