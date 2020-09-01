import { Pool, PoolClient } from 'pg';
import Transport from 'winston-transport';
import { IPostgresTransportOptions } from '.';

export default class PostgresTransport extends Transport {
    public readonly className = this.constructor.name;
    private pool: Pool;
    private tableName: string;

    constructor(pool: Pool, opts: IPostgresTransportOptions) {
        super(opts);
        this.pool = pool;
        this.tableName = opts.tableName;
        this.log = this.log.bind(this);
    }

    public async log(info: any, callback: () => any): Promise<void> {
        const sql = `INSERT INTO ${this.tableName} (timestamp, level, message, meta) VALUES ($1,$2,$3,$4);`;
        let client: PoolClient | undefined;

        try {
            client = await this.pool.connect();
            await client.query(sql, [info.timestamp, info.level, info.message, info.meta]);
        }
        catch (err) {
            // tslint:disable-next-line: no-console
            console.log(`${this.className}.log(${JSON.stringify(info)}): Falure to Log: ${err.message}`);
        }
        finally {
            if (client) { client.release(); }
        }
    }
}
