
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib49-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib49Component implements OnInit {
      constructor() { }
  
      title = 'lib49-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib49Component],
      providers: [],
      exports: [Lib49Component],
  })
  export class Lib49Module { }

