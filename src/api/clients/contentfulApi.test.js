import ContentfulClient from '@api/clients/contentfulApi';

describe('Test whether getBasicContentData function fetches objects from the API endpoints', () => {
  test('Common data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('common');
      expect(result).toBeInstanceOf(Array);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('Homepage data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('homepage');
      expect(result).toBeInstanceOf(Array);
      const includesImage1 = JSON.stringify(result).includes('image1');
      expect(includesImage1).toBe(true);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('About us data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('about-us');
      expect(result).toBeInstanceOf(Array);
      const includesImage1 = JSON.stringify(result).includes('image1');
      expect(includesImage1).toBe(true);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('Cooperation data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('cooperation');
      expect(result).toBeInstanceOf(Array);
      const includesImage1 = JSON.stringify(result).includes('image1');
      expect(includesImage1).toBe(true);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('Projects data', async () => {
    try {
      const result = await ContentfulClient.getBasicContentData('projects');
      expect(result).toBeInstanceOf(Array);
      const includesImage1 = JSON.stringify(result).includes('image1');
      expect(includesImage1).toBe(true);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});

describe('Check whether getFieldsData returns objects from the API endpoints', () => {
  test('Projects data', async () => {
    try {
      const result = await ContentfulClient.getFieldsData('projects');
      expect(result).toBeInstanceOf(Object);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });

  test('Board members data', async () => {
    try {
      const result = await ContentfulClient.getFieldsData('boardMembers');
      expect(result).toBeInstanceOf(Object);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});

describe('Check whether getPartnerLogos method returns objects from the API endpoints', () => {
  test('Partner logos', async () => {
    try {
      const result = await ContentfulClient.getPartnerLogos();
      const isLogo = JSON.stringify(result).includes('svg');
      expect(isLogo).toBe(true);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});
