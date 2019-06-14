import { Component, OnInit } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { Router } from '@angular/router';
import { StatsService } from './../services/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  bubbleCount = 0;
  bubbleLink = "./../../assets/img/bubble.jpeg"

  constructor(private stats: StatsService) { }

  async ngOnInit() {
    this.bubbleCount = await this.stats.getBubbles();
    console.log("done");
    this.updateBubblePrint();
  }

  updateBubblePrint() {

  }

  increment() {
    this.bubbleCount++;
    this.stats.updateBubbles(this.bubbleCount);
    this.updateBubblePrint();
  }

  traverse() {
    this.stats.traverse();
  }

}
