import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import {AppModuleNgFactory} from "../../.tmp/app/app.module.ngfactory";


enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
