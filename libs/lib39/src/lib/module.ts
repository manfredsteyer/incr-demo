
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib39-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib39Component implements OnInit {
      constructor() { }
  
      title = 'lib39-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib39Component],
      providers: [],
      exports: [Lib39Component],
  })
  export class Lib39Module { }

