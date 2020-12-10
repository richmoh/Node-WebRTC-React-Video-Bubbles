import { Express, Request, Response } from "express";

export class Server {
  private app: Express;
  private port: Number;

  constructor(app: Express, port: Number) {
    this.app = app;
    this.port = port;

    this.app.get("/", (req: Request, res: Response): void => {
      res.render("home", { roomId: req.query.id });
    });

    this.app.get("/status", (req: Request, res: Response): void => {
      res.render("status", { port: this.port });
    });
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log("Server set up on port ", this.port);
    });
  }
}
