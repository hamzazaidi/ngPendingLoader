import { InjectionToken } from '@angular/core';
import { IConfig } from '../models/config';

export const ConfigService = new InjectionToken<IConfig>('Config');
