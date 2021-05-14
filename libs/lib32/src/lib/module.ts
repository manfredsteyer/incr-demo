
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib32-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib32Component implements OnInit {
      constructor() { }
  
      title = 'lib32-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib32Component],
      providers: [],
      exports: [Lib32Component],
  })
  export class Lib32Module { }

