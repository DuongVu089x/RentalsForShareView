import { ShareDialogImageComponent } from './../../share/share-dialog-image/share-dialog-image.component';
import { ShareDialogComponent } from './../../share/share-dialog/share-dialog.component';
import { MdButtonModule, MdIconModule, MdGridListModule, MdCardModule, MdDialogModule, MdInputModule } from '@angular/material';
import { MenuModule } from './../../share/menu/menu.module';
import { MenuComponent } from './../../share/menu/menu.component';
import { ArticleDetailComponent } from './article-detail.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCommentComponent } from './list-comment/list-comment.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdGridListModule,
    MdDialogModule,
    MdInputModule,
    MenuModule
  ],
  declarations: [
    ArticleDetailComponent,
    ListCommentComponent,
    RecommendationComponent,
    CommentComponent,
    ShareDialogComponent,
    ShareDialogImageComponent],
  entryComponents: [ShareDialogComponent, ShareDialogImageComponent],
  providers: []
})
export class ArticleDetailModule { }
