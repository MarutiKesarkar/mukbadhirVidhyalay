import { Component } from '@angular/core';
import { TopSection } from './top-section/top-section';
import { Stats } from "./stats/stats";
import { Mission } from "./mission/mission";
import { Announcements } from "./announcements/announcements";
import { MemberTalk } from "./member-talk/member-talk";
import { AbtResponsiblites } from "../about/abt-responsiblites/abt-responsiblites";
import { AbtApproach } from '../about/abt-approach/abt-approach';

@Component({
  selector: 'app-home',
  imports: [TopSection, Stats, Mission, Announcements,
     MemberTalk, AbtResponsiblites],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone:true
})
export class Home {

}
