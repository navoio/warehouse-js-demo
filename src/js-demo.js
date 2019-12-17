const config = require('./config');
const { NavoClient } = require('@navoio/warehouse');

async function run() {
    const client = new NavoClient(config.url);
    await client.authenticate(config.client, config.apiKey);
    console.log('Navo Client authorized.');
    const jobs = await client.jobs.getAll();
    console.log(`${jobs.length} jobs found.`);
    if (jobs.length === 0) {
        console.log('No jobs found, skipping demonstration of getting job details.');
        return;
    }
    const job = await client.jobs.get(jobs[0].id);
    console.log(`Job ${job.name} requires ${job.storedPartCount} parts.`);
    console.log('JS Demo successfully ran.')
}

console.log('Navo Warehouse JS Demo');
run();