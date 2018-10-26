import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { LoginComponent } from 'src/components/login/login.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  
  {
    path: 'home',
    component: HomeComponent
   
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', 
   component: PageNotFoundComponent 
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
