import { Global, Module } from '@nestjs/common';
import { PrometheusModule, makeCounterProvider } from '@willsoto/nestjs-prometheus';
import { MetricsService } from './metrics.service';

const newUserMetricProvider = makeCounterProvider({
    name: 'new_user',
    help: 'Metric for new users',
    labelNames: ['userId'],
});

@Global()
@Module({
    imports: [
        PrometheusModule.register({
            path: '/metrics',
            defaultMetrics: {
                enabled: true,
            },
        }),
    ],
    providers: [
        MetricsService,
        makeCounterProvider({
            name: 'new_user',
            help: 'Metric for new users',
            labelNames: ['userId'],
        }),
    ],
    exports: [MetricsService, newUserMetricProvider],
})
export class MetricsModule {}
