import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WpPost, WpPostCreate } from '../models/wp.post.model';
import { WpCategory } from '../models/wp.category.model';
import { WpComment, WpCommentCreate } from '../models/wp.comment.model';
import { environment } from 'src/environments/environment';


@Injectable()
export class BlogService {
    private readonly postRouteUrl: string =  environment.wpApiBaseUrl + '/posts';
    private readonly categoriesRouteUrl: string = environment.wpApiBaseUrl + '/categories';
    private readonly commentsRouteUrl: string = environment.wpApiBaseUrl + '/comments';

    constructor(private _httpService: HttpClient){}

    public createPost(postData: WpPostCreate): Observable<any> {
        return this._httpService.post(this.postRouteUrl, postData);
    }

    public createComment(commentData: WpCommentCreate): Observable<any> {
        return this._httpService.post(this.commentsRouteUrl, commentData);
    } 

    public getPosts(categories: string, page?: number, per_page?: number): Observable<WpPost[]> {
        return this._httpService.get<WpPost[]>(this.postRouteUrl, {
                params: {
                    categories: categories,
                    page: page ? page.toString() : '1',
                    per_page: per_page ? per_page.toString() : '10'
                }
        });
    }

    public getCategories(): Observable<WpCategory[]> {
        return this._httpService.get<WpCategory[]>(this.categoriesRouteUrl);
    }

    public getComments(postId: number, page?: number, per_page?: number): Observable<WpComment[]> {
        return this._httpService.get<WpComment[]>(this.commentsRouteUrl, {
            params: {
                post: postId.toString(),
                page: page ? page.toString() : '1',
                per_page: per_page ? per_page.toString() : '10'
            }
        });
    }

    public getCommentsList(): Observable<WpComment[]> {
        return this._httpService.get<WpComment[]>(this.commentsRouteUrl);
    }
}
