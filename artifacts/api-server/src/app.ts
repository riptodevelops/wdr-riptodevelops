import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import path from "path";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/healthz", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

const publicDir = path.join(__dirname, "..", "public");

const staticOptions = {
  setHeaders: (res: express.Response, filePath: string) => {
    if (filePath.endsWith(".mjs") || filePath.endsWith(".js")) {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
    }
  },
};

app.use(express.static(publicDir, staticOptions));
app.use("/api", express.static(publicDir, staticOptions));
app.get(["/", "/api", "/api/"], (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

export default app;
