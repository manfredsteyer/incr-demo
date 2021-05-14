
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib10-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib10Component implements OnInit {
      constructor() { }
  
      title = 'lib10-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib10Component],
      providers: [],
      exports: [Lib10Component],
  })
  export class Lib10Module { }

