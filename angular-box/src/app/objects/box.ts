import { BoxEvent } from "./box-event";

export interface Box {
    test: string;
    userid: string;
    boxid: string;
    events: [BoxEvent];
}
