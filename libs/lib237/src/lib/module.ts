
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib237-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib237Component implements OnInit {
      constructor() { }
  
      title = 'lib237-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib237Component],
      providers: [],
      exports: [Lib237Component],
  })
  export class Lib237Module { }

