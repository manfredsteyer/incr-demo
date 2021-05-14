
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib207-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib207Component implements OnInit {
      constructor() { }
  
      title = 'lib207-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib207Component],
      providers: [],
      exports: [Lib207Component],
  })
  export class Lib207Module { }

