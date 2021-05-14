
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib26-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib26Component implements OnInit {
      constructor() { }
  
      title = 'lib26-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib26Component],
      providers: [],
      exports: [Lib26Component],
  })
  export class Lib26Module { }

