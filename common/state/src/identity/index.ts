import { observable } from '@legendapp/state';
import { persistObservable } from '@legendapp/state/persist';

import { configurePersistenceLayer } from '../persist';

configurePersistenceLayer();

export const IdentityStore = observable({
  completedFtUx: false,
});

persistObservable(IdentityStore, { local: 'identity' });
