
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib202-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib202Component implements OnInit {
      constructor() { }
  
      title = 'lib202-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib202Component],
      providers: [],
      exports: [Lib202Component],
  })
  export class Lib202Module { }

