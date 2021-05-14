
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib196-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib196Component implements OnInit {
      constructor() { }
  
      title = 'lib196-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib196Component],
      providers: [],
      exports: [Lib196Component],
  })
  export class Lib196Module { }

