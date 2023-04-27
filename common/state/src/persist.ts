import { configureObservablePersistence } from '@legendapp/state/persist';
import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv';

let configured = false;

export function configurePersistenceLayer() {
  if (!configured) {
    configureObservablePersistence({ persistLocal: ObservablePersistMMKV });
    configured = true;
  }
}
