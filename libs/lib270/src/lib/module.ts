
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib270-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib270Component implements OnInit {
      constructor() { }
  
      title = 'lib270-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib270Component],
      providers: [],
      exports: [Lib270Component],
  })
  export class Lib270Module { }

