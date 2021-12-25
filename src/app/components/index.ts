export * from './node/node.component';
export * from './link/link.component';

import { NodeComponent } from './node/node.component';
import { LinkComponent } from './link/link.component';

export const SHARED_VISUALS = [
    NodeComponent,
    LinkComponent
];
