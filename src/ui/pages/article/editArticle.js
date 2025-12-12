import { test, expect } from '@playwright/test';
import { EditArticlePage } from '../../pages/article/EditArticlePage';

export default class EditArticleActions {
  constructor(page) {
    this.page = page;
    this.editArticlePage = new EditArticlePage(page);
  }

  async openEditArticleFromSlug(slug) {
    await this.editArticlePage.openFromArticleSlug(slug);
  }

  async editTitle(value) {
    await this.editArticlePage.fillTitleField(value);
  }

  async editDescription(value) {
    await this.editArticlePage.fillDescriptionField(value);
  }

  async editText(value) {
    await this.editArticlePage.fillTextField(value);
  }

  async clearTitle() {
    await this.editArticlePage.clearTitle();
  }

  async clearDescription() {
    await this.editArticlePage.clearDescription();
  }

  async clearText() {
    await this.editArticlePage.clearText();
  }

  async addTag(tag) {
    await test.step(`Add tag: ${tag}`, async () => {
      await this.editArticlePage.tagsField.fill(tag);
      await this.page.keyboard.press('Enter');
    });
  }

  async submitEditedArticle() {
    await this.editArticlePage.updateArticleButton.click();
  }

  async expectErrorMessage(message) {
    await test.step(`Expect error message: ${message}`, async () => {
      await expect(this.editArticlePage.errorMessage).toHaveText(message);
    });
  }

  async expectTitleIs(value) {
    await test.step(`Validate title is: ${value}`, async () => {
      await expect(this.editArticlePage.titleField).toHaveValue(value);
    });
  }

  async expectDescriptionIs(value) {
    await test.step(`Validate description is: ${value}`, async () => {
      await expect(this.editArticlePage.descriptionField).toHaveValue(value);
    });
  }

  async expectTextIs(value) {
    await test.step(`Validate text is updated`, async () => {
      await expect(this.editArticlePage.textField).toHaveValue(value);
    });
  }
}
