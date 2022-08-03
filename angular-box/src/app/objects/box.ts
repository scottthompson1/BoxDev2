import { BoxEvent } from "./box-event";

export interface Box {
    test: string;
    userid: string;
    events: [BoxEvent];
}
