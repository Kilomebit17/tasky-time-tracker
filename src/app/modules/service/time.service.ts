import { Injectable } from "@angular/core";
import { Custom, TimeByMilliseconds } from "../../constants/constants";
import { TimeI } from "../interfaces/time.interface";

@Injectable()
export class TimeService {
    constructor() { };

    get getDate(): Date {
        return new Date();
    }

    public calcDifferenceTime(currentTime:Custom,differenceTime:Custom):TimeI {
        let differenceResult = differenceTime - currentTime;

        let hours = Math.floor(differenceResult / TimeByMilliseconds.hours); 
        let minutes = Math.floor((differenceResult % TimeByMilliseconds.hours) / TimeByMilliseconds.minute); 
        let seconds = Math.floor((differenceResult % TimeByMilliseconds.minute) / TimeByMilliseconds.second);

        return {hours,minutes,seconds}
    }
}

