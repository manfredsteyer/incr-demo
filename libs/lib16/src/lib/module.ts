
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib16-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib16Component implements OnInit {
      constructor() { }
  
      title = 'lib16-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib16Component],
      providers: [],
      exports: [Lib16Component],
  })
  export class Lib16Module { }

