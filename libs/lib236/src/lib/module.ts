
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib236-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib236Component implements OnInit {
      constructor() { }
  
      title = 'lib236-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib236Component],
      providers: [],
      exports: [Lib236Component],
  })
  export class Lib236Module { }

