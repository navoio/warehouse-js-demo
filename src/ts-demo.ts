import config from './config';
import { NavoClient } from '@navoio/warehouse';

async function run() {
    const client = new NavoClient(config.url, { username: config.client, password: config.apiKey });
    await client.authorize(config.client, config.apiKey);
    console.log('Navo Client authorized.');
    const jobs = await client.jobs.getAll();
    console.log(`${jobs.length} jobs found.`);
    if (jobs.length === 0) {
        console.log('No jobs found, skipping demonstration of getting job details.');
        return;
    }
    const job = await client.jobs.get(jobs[0].id as any as number);
    console.log(`Job ${job.name} requires ${job.storedPartCount} parts.`);
    console.log('TS Demo successfully ran.');
}

console.log('Navo Warehouse TS Demo');
run();