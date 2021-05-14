
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib243-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib243Component implements OnInit {
      constructor() { }
  
      title = 'lib243-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib243Component],
      providers: [],
      exports: [Lib243Component],
  })
  export class Lib243Module { }

