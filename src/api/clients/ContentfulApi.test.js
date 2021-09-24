import ContentfulClient from '@api/clients/contentfulApi';

describe('Test whether getBasicContentData functions fetch objects from the API endpoints', () => {
  test('Common data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('common');
      expect(result).toBeDefined();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('Homepage data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('homepage');
      expect(result).toBeInstanceOf(Array);
      expect(result[0].fields.image1).toBeDefined();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('About us data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('about-us');
      expect(result).toBeDefined();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('Cooperation data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('cooperation');
      expect(result).toBeDefined();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('Projects data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('projects');
      expect(result).toBeDefined();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});
