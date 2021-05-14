
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib179-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib179Component implements OnInit {
      constructor() { }
  
      title = 'lib179-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib179Component],
      providers: [],
      exports: [Lib179Component],
  })
  export class Lib179Module { }

