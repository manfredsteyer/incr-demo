
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib94-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib94Component implements OnInit {
      constructor() { }
  
      title = 'lib94-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib94Component],
      providers: [],
      exports: [Lib94Component],
  })
  export class Lib94Module { }

