
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib86-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib86Component implements OnInit {
      constructor() { }
  
      title = 'lib86-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib86Component],
      providers: [],
      exports: [Lib86Component],
  })
  export class Lib86Module { }

