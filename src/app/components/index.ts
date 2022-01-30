export * from './editor/node/node.component';
export * from './editor/link/link.component';

import { NodeComponent } from './editor/node/node.component';
import { LinkComponent } from './editor/link/link.component';

export const SHARED_VISUALS = [
    NodeComponent,
    LinkComponent
];
