
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib241-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib241Component implements OnInit {
      constructor() { }
  
      title = 'lib241-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib241Component],
      providers: [],
      exports: [Lib241Component],
  })
  export class Lib241Module { }

