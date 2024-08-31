import express from "express";

import serverConfig from "./config/serverConfig";
import sampleQueueProducer from "./producers/sampleQueueProducer";
import apiRouter from "./routes";
import SampleWorker from "./workers/SampleWorker";

const app = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {

    console.log(`Server running on * ${serverConfig.PORT}`);

    SampleWorker("SampleQueue");

    sampleQueueProducer("SampleJob", {
        "name": "Logesh",
        "level": "SDE-1",
        "location": "BLR | Remote"
    });
});