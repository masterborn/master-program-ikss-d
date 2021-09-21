import ContentfulClient from '@api/clients/contentfulApi';

test('returns assets', async () => {
  const result = await ContentfulClient.getBasicContentData('common');
  expect(result).toBe({});
});
