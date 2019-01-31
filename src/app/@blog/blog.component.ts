import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { BlogService } from './blog.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogComponent implements OnInit, OnDestroy {
  
  public blogUrl: SafeResourceUrl;

  constructor(private _wpService: BlogService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.blogUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://miamitopcleaning.com/blog');
    document.body.classList.add('blog-mode');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('blog-mode');
  }

  onLoad(event) {
    console.log(event);
  }

}
