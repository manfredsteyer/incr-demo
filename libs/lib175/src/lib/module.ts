
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib175-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib175Component implements OnInit {
      constructor() { }
  
      title = 'lib175-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib175Component],
      providers: [],
      exports: [Lib175Component],
  })
  export class Lib175Module { }

