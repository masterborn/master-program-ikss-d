import ContentfulClient from '@api/clients/contentfulApi';

describe('Test whether getBasicContentData function fetches objects from the API endpoints', () => {
  it('Common data', async () => {
    const result = await ContentfulClient.getBasicContentData('common');
    expect(result.length).toBeGreaterThan(1);
  });

  it('Homepage data', async () => {
    const result = await ContentfulClient.getBasicContentData('homepage');
    expect(result.length).toBeGreaterThan(1);
    expect(JSON.stringify(result)).toContain('image1');
  });

  it('About us data', async () => {
    const result = await ContentfulClient.getBasicContentData('about-us');
    expect(result.length).toBeGreaterThan(1);
    expect(JSON.stringify(result)).toContain('image1');
  });

  it('Cooperation data', async () => {
    const result = await ContentfulClient.getBasicContentData('cooperation');
    expect(result.length).toBeGreaterThan(1);
    expect(JSON.stringify(result)).toContain('image1');
  });

  it('Projects data', async () => {
    const result = await ContentfulClient.getBasicContentData('projects');
    expect(result.length).toBeGreaterThan(1);
    expect(JSON.stringify(result)).toContain('image1');
  });
});

describe('Check whether getFieldsData returns objects from the API endpoints', () => {
  it('Projects data', async () => {
    const result = await ContentfulClient.getFieldsData('projects');
    expect(result).toBeInstanceOf(Object);
  });

  it('Board members data', async () => {
    const result = await ContentfulClient.getFieldsData('boardMembers');
    expect(result).toBeInstanceOf(Object);
  });
});

describe('Check whether getPartnerLogos method returns objects from the API endpoints', () => {
  it('Partner logos', async () => {
    const result = await ContentfulClient.getPartnerLogos();
    expect(JSON.stringify(result)).toContain('svg');
  });
});
