import { createRequestHandler } from "@remix-run/express";
import express from "express";

import * as build from "@remix-run/dev/server-build";

const app = express();
app.use(express.static("public"));

app.all(
  "*",
  createRequestHandler({
    build,
    mode: process.env.NODE_ENV,
  })
);

export default app;