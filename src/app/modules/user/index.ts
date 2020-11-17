export * from './profile/profile.component';
export * from './user-root/user-root.component';

import * as file1 from './profile/profile.component';
import * as file2 from './user-root/user-root.component';

export const COMPONENTS = [
    file1.ProfileComponent,
    file2.UserRootComponent
]