import { TransportStreamOptions } from 'winston-transport';

export interface IPostgresTransportOptions extends TransportStreamOptions {
    level: string;
    tableName: string;
}
