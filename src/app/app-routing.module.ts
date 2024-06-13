import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotfoundComponent} from "./notfound/notfound.component";



const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.component').then((m) => m.HomeComponent) },
  { path:'',loadChildren:() => import('./home/home.component').then((m) => m.HomeComponent)},
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
