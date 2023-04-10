import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { AboutComponent } from "./about/about.component";
import { AcademicsComponent } from "./academics/academics.component";
import { CertComponent } from "./cert/cert.component";
import { ThoughtsComponent } from "./thoughts/thoughts.component";
import { AttemptsComponent } from "./attempts/attempts.component";

const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "about", component: AboutComponent },
  { path: "academics", component: AcademicsComponent },
  { path: "about", component: AboutComponent },
  { path: "cert", component: CertComponent },
  { path: "thoughts", component: ThoughtsComponent },
  { path: "attempts", component: AttemptsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
