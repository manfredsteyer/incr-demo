
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib229-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib229Component implements OnInit {
      constructor() { }
  
      title = 'lib229-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib229Component],
      providers: [],
      exports: [Lib229Component],
  })
  export class Lib229Module { }

