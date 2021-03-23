import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'demos/demos01-databinding',
    loadChildren: () => import('./demos/demos01-databinding/demos01-databinding.module').then(m => m.Demos01DatabindingModule)
  }, {
    path: 'demos/demos02-composants',
    loadChildren: () => import('./demos/demos02-composants/demos02-composants.module').then(m => m.Demos02ComposantsModule)
  }, {
    path: 'demos/demos01-databinding',
    loadChildren: () => import('./demos/demos01-databinding/demos01-databinding.module').then(m => m.Demos01DatabindingModule)
  }, {
    path: 'demos/demos02-composants',
    loadChildren: () => import('./demos/demos02-composants/demos02-composants.module').then(m => m.Demos02ComposantsModule)
  }, {
    path: 'demos/demos03-directives',
    loadChildren: () => import('./demos/demos03-directives/demos03-directives.module').then(m => m.Demos03DirectivesModule)
  }, {
    path: 'demos/demos04-injection-dependances',
    loadChildren: () => import('./demos/demos04-injection-dependances/demos04-injection-dependances.module').then(m => m.Demos04InjectionDependancesModule)
  }, {
    path: 'demos/demos05-observable',
    loadChildren: () => import('./demos/demos05-observable/demos05-observable.module').then(m => m.Demos05ObservableModule)
  }, {
    path: 'demos/demos06-directive-service',
    loadChildren: () => import('./demos/demos06-directive-service/demos06-directive-service.module').then(m => m.Demos06DirectiveServiceModule)
  }, {
    path: 'demos/demos07-routing',
    loadChildren: () => import('./demos/demos07-routing/demos07-routing.module').then(m => m.Demos07RoutingModule)
  }, {
    path: 'demos/demos08-formulaire',
    loadChildren: () => import('./demos/demos08-formulaire/demos08-formulaire.module').then(m => m.Demos08FormulaireModule)
  }, {
    path: 'demos/demos09-pipes',
    loadChildren: () => import('./demos/demos09-pipes/demos09-pipes.module').then(m => m.Demos09PipesModule)
  }, {
    path: 'demos/demos10-requetes-http',
    loadChildren: () => import('./demos/demos10-requetes-http/demos10-requetes-http.module').then(m => m.Demos10RequetesHttpModule)
  }, {
    path: 'demos/demos11-modules',
    loadChildren: () => import('./demos/demos11-modules/demos11-modules.module').then(m => m.Demos11ModulesModule)
  }, {
    path: 'demos/demos12-animations',
    loadChildren: () => import('./demos/demos12-animations/demos12-animations.module').then(m => m.Demos12AnimationsModule)
  }, {
    path: 'demos/demos13-test',
    loadChildren: () => import('./demos/demos13-test/demos13-test.module').then(m => m.Demos13TestModule)
  }, {
    path: 'demos/demos14-material',
    loadChildren: () => import('./demos/demos14-material/demos14-material.module').then(m => m.Demos14MaterialModule)
  }, {
    path: 'demos/demos15-jwt',
    loadChildren: () => import('./demos/demos15-jwt/demos15-jwt.module').then(m => m.Demos15JwtModule)
  }, {
    path: 'demos/demos16-rxjs',
    loadChildren: () => import('./demos/demos16-rxjs/demos16-rxjs.module').then(m => m.Demos16RxjsModule)
  }, {
    path: 'demos/demos17-rxjs-test',
    loadChildren: () => import('./demos/demos17-rxjs-test/demos17-rxjs-test.module').then(m => m.Demos17RxjsTestModule)
  }, {
    path: 'demos/demos18-worker-pwa',
    loadChildren: () => import('./demos/demos18-worker-pwa/demos18-worker-pwa.module').then(m => m.Demos18WorkerPwaModule)
  }, {
    path: 'demos/demos19-universal',
    loadChildren: () => import('./demos/demos19-universal/demos19-universal.module').then(m => m.Demos19UniversalModule)
  }, {
    path: 'demos/demos20-librarie-personnelle',
    loadChildren: () => import('./demos/demos20-librarie-personnelle/demos20-librarie-personnelle.module').then(m => m.Demos20LibrariePersonnelleModule)
  }, {
    path: 'demos/demos21-formulaire-avancee',
    loadChildren: () => import('./demos/demos21-formulaire-avancee/demos21-formulaire-avancee.module').then(m => m.Demos21FormulaireAvanceeModule)
  }, {
    path: 'demos/demos22-gestion-chargement',
    loadChildren: () => import('./demos/demos22-gestion-chargement/demos22-gestion-chargement.module').then(m => m.Demos22GestionChargementModule)
  }, {
    path: 'demos/demos23-upload-fichiers',
    loadChildren: () => import('./demos/demos23-upload-fichiers/demos23-upload-fichiers.module').then(m => m.Demos23UploadFichiersModule)
  }, {
    path: 'demos/demos24-sentry-erreurs',
    loadChildren: () => import('./demos/demos24-sentry-erreurs/demos24-sentry-erreurs.module').then(m => m.Demos24SentryErreursModule)
  }, {
    path: 'demos/demos25-services-meta-title',
    loadChildren: () => import('./demos/demos25-services-meta-title/demos25-services-meta-title.module').then(m => m.Demos25ServicesMetaTitleModule)
  }, {
    path: 'demos/demos26-i18n',
    loadChildren: () => import('./demos/demos26-i18n/demos26-i18n.module').then(m => m.Demos26I18nModule)
  }, {
    path: 'demos/demos27-push-notifications',
    loadChildren: () => import('./demos/demos27-push-notifications/demos27-push-notifications.module').then(m => m.Demos27PushNotificationsModule)
  }, {
    path: 'projets/projet01-cocktails',
    loadChildren: () => import('./projets/projet01-cocktails/projet01-cocktails.module').then(m => m.Projet01CocktailsModule)
  }, {
    path: 'projets/projet02-input-output',
    loadChildren: () => import('./projets/projet02-input-output/projet02-input-output.module').then(m => m.Projet02InputOutputModule)
  }, {
    path: 'projets/projet03-directive-service',
    loadChildren: () => import('./projets/projet03-directive-service/projet03-directive-service.module').then(m => m.Projet03DirectiveServiceModule)
  }, {
    path: 'projets/projet04-routing',
    loadChildren: () => import('./projets/projet04-routing/projet04-routing.module').then(m => m.Projet04RoutingModule)
  }, {
    path: 'projets/projet05-formulaires',
    loadChildren: () => import('./projets/projet05-formulaires/projet05-formulaires.module').then(m => m.Projet05FormulairesModule)
  }, {
    path: 'projets/projet06-pipe-http',
    loadChildren: () => import('./projets/projet06-pipe-http/projet06-pipe-http.module').then(m => m.Projet06PipeHttpModule)
  }, {
    path: 'projets/projet07-ngrx',
    loadChildren: () => import('./projets/projet07-ngrx/projet07-ngrx.module').then(m => m.Projet07NgrxModule)
  }, {
    path: 'projets/projet08-todolist',
    loadChildren: () => import('./projets/projet08-todolist/projet08-todolist.module').then(m => m.Projet08TodolistModule)
  },  {
    path: '',
    redirectTo: 'demos/demos01-databinding',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
