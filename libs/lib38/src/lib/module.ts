
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib38-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib38Component implements OnInit {
      constructor() { }
  
      title = 'lib38-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib38Component],
      providers: [],
      exports: [Lib38Component],
  })
  export class Lib38Module { }

