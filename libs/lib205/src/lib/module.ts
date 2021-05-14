
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib205-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib205Component implements OnInit {
      constructor() { }
  
      title = 'lib205-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib205Component],
      providers: [],
      exports: [Lib205Component],
  })
  export class Lib205Module { }

