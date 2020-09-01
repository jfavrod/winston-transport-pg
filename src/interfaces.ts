import { TransportStreamOptions } from 'winston-transport';

export interface IPostgresTransportOptions extends TransportStreamOptions {
    tableName: string;
}
