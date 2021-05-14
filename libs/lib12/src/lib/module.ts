
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib12-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib12Component implements OnInit {
      constructor() { }
  
      title = 'lib12-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib12Component],
      providers: [],
      exports: [Lib12Component],
  })
  export class Lib12Module { }

