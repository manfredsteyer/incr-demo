
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib52-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib52Component implements OnInit {
      constructor() { }
  
      title = 'lib52-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib52Component],
      providers: [],
      exports: [Lib52Component],
  })
  export class Lib52Module { }

