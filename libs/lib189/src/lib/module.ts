
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib189-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib189Component implements OnInit {
      constructor() { }
  
      title = 'lib189-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib189Component],
      providers: [],
      exports: [Lib189Component],
  })
  export class Lib189Module { }

