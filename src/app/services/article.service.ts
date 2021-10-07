import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
articleURL:string='http://localhost:3000/articles';

  constructor( private http:HttpClient) { }

  getAllArticles(){


   return this.http.get<{allArticles:any}>(this.articleURL)
  }
  getArticleById(id){


    return this.http.get<{article:any}>(`${this.articleURL}/${id}`);
  }

deleteArticle(id){
  return this.http.delete<{message:string}>(`${this.articleURL}/${id}`);
}
addArticle(article ,img:File){
  let formData = new FormData();
  formData.append('title',article.title);
  formData.append('content',article.content);
  formData.append('date',article.date);
  formData.append('category',article.category);
  formData.append('img',img);

return this.http.post<{message:string}>(this.articleURL,formData);


}
editArticle(article){

  return this.http.put<{message:string}>(`${this.articleURL}/${article._id}`,article);
}
}
