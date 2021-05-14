
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib30-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib30Component implements OnInit {
      constructor() { }
  
      title = 'lib30-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib30Component],
      providers: [],
      exports: [Lib30Component],
  })
  export class Lib30Module { }

