
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib133-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib133Component implements OnInit {
      constructor() { }
  
      title = 'lib133-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib133Component],
      providers: [],
      exports: [Lib133Component],
  })
  export class Lib133Module { }

