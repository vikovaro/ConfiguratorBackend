import { Injectable } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Injectable()
export class MetricsService {
    constructor(@InjectMetric('new_user') public newUserCounter: Counter<string>) {}

    async userRegister() {
        this.newUserCounter.inc();
    }
}
