
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib74-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib74Component implements OnInit {
      constructor() { }
  
      title = 'lib74-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib74Component],
      providers: [],
      exports: [Lib74Component],
  })
  export class Lib74Module { }

