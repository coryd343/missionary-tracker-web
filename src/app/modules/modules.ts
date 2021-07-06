export * from './user/user.module';
export * from './map/map.module';

import * as file1 from './user/user.module';
import * as file2 from './map/map.module';

export const MODULES = [
    file1.UserModule,
    file2.MapModule,
];