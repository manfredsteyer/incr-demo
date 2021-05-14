
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib239-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib239Component implements OnInit {
      constructor() { }
  
      title = 'lib239-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib239Component],
      providers: [],
      exports: [Lib239Component],
  })
  export class Lib239Module { }

