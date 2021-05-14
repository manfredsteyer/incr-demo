
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib254-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib254Component implements OnInit {
      constructor() { }
  
      title = 'lib254-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib254Component],
      providers: [],
      exports: [Lib254Component],
  })
  export class Lib254Module { }

