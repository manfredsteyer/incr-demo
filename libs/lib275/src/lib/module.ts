
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib275-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib275Component implements OnInit {
      constructor() { }
  
      title = 'lib275-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib275Component],
      providers: [],
      exports: [Lib275Component],
  })
  export class Lib275Module { }

