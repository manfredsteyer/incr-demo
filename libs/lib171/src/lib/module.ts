
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib171-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib171Component implements OnInit {
      constructor() { }
  
      title = 'lib171-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib171Component],
      providers: [],
      exports: [Lib171Component],
  })
  export class Lib171Module { }

