import { Static } from 'runtypes';
import express from 'express';
import Prometheus from 'prom-client';
import { Options } from './libs/data_types';
export declare class ExpressPrometheusMiddleware {
    constructor(options?: Static<typeof Options>);
    static get version(): string;
    get collectDefaultMetrics(): boolean | Prometheus.DefaultMetricsCollectorConfiguration;
    get collectGCMetrics(): boolean;
    get exclude(): (req: express.Request) => boolean;
    get excludePaths(): string[];
    get handler(): express.RequestHandler;
    get url(): string;
}
//# sourceMappingURL=index.d.ts.map