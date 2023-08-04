import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//市原コメント致しました。
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
