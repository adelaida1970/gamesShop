import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },     
  { path: 'header', component: HeaderComponent  },
  { path: 'nav', component: NavComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
