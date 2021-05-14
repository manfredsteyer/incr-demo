
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { RouterModule } from '@angular/router';
    import { AppComponent } from './app.component';
    
    @NgModule({
      imports: [
        RouterModule.forRoot([{
          path: 'mfe',
          loadChildren: () => import('./lazy-module').then(m => m.Mfe2Module)
        }])
      ],
      declarations: [AppComponent],
      providers: [],
      bootstrap: [AppComponent],
    })
    export class AppModule {}
    
    