
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib258-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib258Component implements OnInit {
      constructor() { }
  
      title = 'lib258-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib258Component],
      providers: [],
      exports: [Lib258Component],
  })
  export class Lib258Module { }

