
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib154-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib154Component implements OnInit {
      constructor() { }
  
      title = 'lib154-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib154Component],
      providers: [],
      exports: [Lib154Component],
  })
  export class Lib154Module { }

