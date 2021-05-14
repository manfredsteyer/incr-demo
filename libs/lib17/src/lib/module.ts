
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib17-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib17Component implements OnInit {
      constructor() { }
  
      title = 'lib17-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib17Component],
      providers: [],
      exports: [Lib17Component],
  })
  export class Lib17Module { }

