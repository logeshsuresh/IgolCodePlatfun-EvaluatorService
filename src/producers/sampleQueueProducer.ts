import SampleQueue from "../queues/SampleQueue";

export default async function addJob(name: string, payload: Record<string, unknown>) {
    await SampleQueue.add(name, payload);
};