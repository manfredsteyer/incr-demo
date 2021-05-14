
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib83-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib83Component implements OnInit {
      constructor() { }
  
      title = 'lib83-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib83Component],
      providers: [],
      exports: [Lib83Component],
  })
  export class Lib83Module { }

