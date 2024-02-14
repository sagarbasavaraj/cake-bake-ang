import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { IModuleTranslationOptions, ModuleTranslateLoader } from '@larscom/ngx-translate-module-loader';


export function moduleHttpLoaderFactory(http: HttpClient) {
  const baseTranslateUrl = './assets/i18n'

  const options: IModuleTranslationOptions = {
    modules: [
      // final url: ./assets/i18n/en.json
      { baseTranslateUrl },
      // final url: ./assets/i18n/order/en.json
      { baseTranslateUrl, moduleName: 'order' },
      { baseTranslateUrl, moduleName: 'dashboard' }
    ]
  }

  return new ModuleTranslateLoader(http, options)
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules)
    ),
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: moduleHttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }))
  ],
};
