import { Component, OnInit, Inject } from '@angular/core';
import { TopMenu } from 'src/app/shared/components';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService, token } from '../../services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  constructor(
    private router: Router,
    private service: HomeService,
    private route: ActivatedRoute,
    @Inject(token) private baseUrl: string,
  ) { }

  topMenus$: Observable<TopMenu[]>;
  selectedTabLink$: Observable<string>;

  handleTabSelected(topMenu: TopMenu) {
    // console.log(topMenu);
    this.router.navigate(['home', topMenu.link]);
  }

  ngOnInit() {
    this.topMenus$ = this.service.getTabs();
    // console.log(this.baseUrl);
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
  }

}
