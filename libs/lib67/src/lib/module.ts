
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib67-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib67Component implements OnInit {
      constructor() { }
  
      title = 'lib67-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib67Component],
      providers: [],
      exports: [Lib67Component],
  })
  export class Lib67Module { }

