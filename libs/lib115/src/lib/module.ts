
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib115-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib115Component implements OnInit {
      constructor() { }
  
      title = 'lib115-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib115Component],
      providers: [],
      exports: [Lib115Component],
  })
  export class Lib115Module { }

