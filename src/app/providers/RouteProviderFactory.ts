import {RouteProvider} from '@app/providers/RouteProvider';

export function routeProviderFactory(provider: RouteProvider) {
    return () => provider.load();
}
