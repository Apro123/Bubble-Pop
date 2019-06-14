import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  //key: name value: bubbles per second //for Characters

  constructor(private storage: Storage) {
    // total = false;
    // await this.storage.forEach((value: string, key: string) => {
    //   console.log("key: " + key);
    //   console.log("value: " + value);
    //   if(key + "" == "total-bubbles") {
    //     total = true;
    //   }
    // });
    this.updateBubbles(0);
  }

  addCharacter(character: string, bps: string) {
    this.storage.set(character, bps).then(() => {
      console.log("added char: " + character);
    });
  }

  updateBubbles(totalBubbles: Number) {
    this.storage.set("total-bubbles", totalBubbles).then(() => {
      console.log("updated bubbles");
    });
  }

  async getBubbles() {
    return this.storage.get("total-bubbles").then((val) => {
      return val;
    });
  }

  traverse() {
    this.storage.forEach((value: string, key: string) => {
      console.log("key: " + key);
      console.log("value: " + value);
    });
  }
}
