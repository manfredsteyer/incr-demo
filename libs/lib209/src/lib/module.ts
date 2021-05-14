
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib209-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib209Component implements OnInit {
      constructor() { }
  
      title = 'lib209-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib209Component],
      providers: [],
      exports: [Lib209Component],
  })
  export class Lib209Module { }

