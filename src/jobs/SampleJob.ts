import { Job } from "bullmq";

import { IJob } from "../types/bullMQJobDefinition";

export default class SampleJob implements IJob {
    name: string;
    payload: Record<string, unknown>;

    constructor(payload: Record<string, unknown>) {
        this.name = this.constructor.name;
        this.payload = payload;
    }

    handle = (job?: Job) => {
        console.log(`handler of job ${job} called`);
    };

    failed = (job?: Job) => {
        console.log(`failure of job ${job} called`);
    };
};