export class RTTUser {
  constructor(private name: string) {}
}

export class RTTSeat {
  constructor(private from: RTTUser, private body: any) {}
}

export class RTTResponse {
  constructor(private connction: number, seats: Array<RTTSeat>) {}
}
