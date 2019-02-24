import { createServer, Server } from "http";
import DB from "../firebaseInit";
import * as express from "express";
import * as socketIo from "socket.io";

import { RTTResponse } from "./model/seat.model";

export class RTTServer {
  public static readonly PORT: number = 8082;
  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private db: any;
  private port: string | number;

  constructor() {
    this.createApp();
    this.configuration();
    this.createServer();
    this.sockets();
    this.listen();
  }

  private createApp() {
    this.app = express();
  }
  private createServer() {
    this.server = createServer(this.app);
  }
  private sockets() {
    this.io = socketIo(this.server);
  }
  private configuration() {
    this.port = process.env.PORT || RTTServer.PORT;
  }

  private listen() {
    this.server.listen(this.port, () => {
      console.log("Running server on port ", this.port);
    });

    this.io.on("connect", (socket: any) => {
      console.log("connected client on port", this.port);
      socket.on("message", (res: RTTResponse) => {
        console.log("[server]response", JSON.stringify(res));
        this.io.emit("seat", res);
      });
      socket.on("disconnect", () => {
        console.log("Bye");
      });
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}
