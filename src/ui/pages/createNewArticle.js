import { CreateArticlePage } from '../../pages/article/CreateArticlePage';

export async function createNewArticle(page, article) {
  const createArticlePage = new CreateArticlePage(page);

  await createArticlePage.open();
  await createArticlePage.fillTitleField(article.title);
  await createArticlePage.fillDescriptionField(article.description);
  await createArticlePage.fillTextField(article.text);

  if (article.tags?.length) {
    for (const tag of article.tags) {
      await createArticlePage.fillTagsField(tag);
    }
  }

  await createArticlePage.clickPublishArticleButton();
}
