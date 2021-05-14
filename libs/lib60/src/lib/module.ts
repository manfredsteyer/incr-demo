
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib60-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib60Component implements OnInit {
      constructor() { }
  
      title = 'lib60-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib60Component],
      providers: [],
      exports: [Lib60Component],
  })
  export class Lib60Module { }

