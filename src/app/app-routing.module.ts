import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "main", component: SidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
