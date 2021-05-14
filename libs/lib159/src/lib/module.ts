
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib159-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib159Component implements OnInit {
      constructor() { }
  
      title = 'lib159-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib159Component],
      providers: [],
      exports: [Lib159Component],
  })
  export class Lib159Module { }

