
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib206-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib206Component implements OnInit {
      constructor() { }
  
      title = 'lib206-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib206Component],
      providers: [],
      exports: [Lib206Component],
  })
  export class Lib206Module { }

