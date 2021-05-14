
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib126-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib126Component implements OnInit {
      constructor() { }
  
      title = 'lib126-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib126Component],
      providers: [],
      exports: [Lib126Component],
  })
  export class Lib126Module { }

