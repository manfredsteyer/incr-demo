
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib273-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib273Component implements OnInit {
      constructor() { }
  
      title = 'lib273-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib273Component],
      providers: [],
      exports: [Lib273Component],
  })
  export class Lib273Module { }

