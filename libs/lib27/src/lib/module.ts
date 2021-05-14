
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib27-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib27Component implements OnInit {
      constructor() { }
  
      title = 'lib27-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib27Component],
      providers: [],
      exports: [Lib27Component],
  })
  export class Lib27Module { }

