import { Component, Input } from '@angular/core';
import { InstaProfileData } from '../ipv-dashboard/ipv-dashboard.component';

@Component({
  selector: 'app-ipv-profile',
  templateUrl: './ipv-profile.component.html',
  styleUrls: ['./ipv-profile.component.css']
})
export class IpvProfileComponent {
  @Input() profileData: InstaProfileData;

}
