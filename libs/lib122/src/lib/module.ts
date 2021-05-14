
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib122-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib122Component implements OnInit {
      constructor() { }
  
      title = 'lib122-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib122Component],
      providers: [],
      exports: [Lib122Component],
  })
  export class Lib122Module { }

