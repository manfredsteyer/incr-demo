
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib197-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib197Component implements OnInit {
      constructor() { }
  
      title = 'lib197-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib197Component],
      providers: [],
      exports: [Lib197Component],
  })
  export class Lib197Module { }

