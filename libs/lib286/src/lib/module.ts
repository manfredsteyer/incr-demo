
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib286-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib286Component implements OnInit {
      constructor() { }
  
      title = 'lib286-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib286Component],
      providers: [],
      exports: [Lib286Component],
  })
  export class Lib286Module { }

