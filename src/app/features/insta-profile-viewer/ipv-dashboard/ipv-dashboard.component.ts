import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/shared/api-service';
import { SharedConstants } from 'src/app/shared/shared-constants';

export interface InstaProfileData {
  userName: string;
  fullName: string;
  biography: string;
  avatar: string,
  profilePicUrl: string
  followingCount: number;
  followersCount: number;
  postsCount: number;
  isPrivate: boolean;
  isProfessionalAccnt: boolean;
  instaUrl: string;
}

@Component({
  selector: 'app-ipv-dashboard',
  templateUrl: './ipv-dashboard.component.html',
  styleUrls: ['./ipv-dashboard.component.css']
})
export class IpvDashboardComponent implements OnInit {
  instaResp: any;
  profileData: InstaProfileData;
  userName: string = 'shravan_kulkarni5';
  constructor(private apiService: APIService) { }

  ngOnInit(): void {

  }

  private getProfileData(userName: string) {
    if (!userName) {
      return;
    }
    this.apiService.get(SharedConstants.PROXY_API + userName + SharedConstants.INSTA_PROF_SUFFIX)
    .subscribe((resp: any) => {
      this.instaResp = resp;
      const user = resp['graphql']['user'];
      this.profileData = {
        biography : user.biography,
        profilePicUrl : this.getProfilePictureUrl(user.profile_pic_url_hd),
        avatar: this.getProfilePictureUrl(user.profile_pic_url),
        userName : user.username,
        fullName : user.full_name,
        followingCount : user.edge_follow.count,
        followersCount : user.edge_followed_by.count,
        postsCount : user.edge_owner_to_timeline_media.count,
        isPrivate : user.is_private,
        isProfessionalAccnt : user.is_professional_account,
        instaUrl: SharedConstants.INSTA_WEB_URL + user.username
      } as InstaProfileData;
    });
  }

  searchProfile(userName: string) {
    if (!userName) {
      return;
    }
    this.getProfileData(userName);
  }

  getProfilePictureUrl(url: string) {
    const spiltUrl = url.split("/v");
    return '/profile/v' + spiltUrl[1];
    // this.apiService.get(profileUrl).subscribe(data => {
    //   console.log(data)
    // });
  }

}
