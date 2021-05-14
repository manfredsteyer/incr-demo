
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib8-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib8Component implements OnInit {
      constructor() { }
  
      title = 'lib8-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib8Component],
      providers: [],
      exports: [Lib8Component],
  })
  export class Lib8Module { }

