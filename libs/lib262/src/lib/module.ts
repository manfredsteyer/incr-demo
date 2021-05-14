
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib262-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib262Component implements OnInit {
      constructor() { }
  
      title = 'lib262-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib262Component],
      providers: [],
      exports: [Lib262Component],
  })
  export class Lib262Module { }

