import ContentfulClient from '@api/clients/contentfulApi';
import {
  filterData,
  filterBasicContentData,
  filterLogos,
  filterSocials,
} from '@root/contentfulDataTransformers/filterData';

describe('Check filterData function outputs', () => {
  test('Projects data', async () => {
    const projects = await ContentfulClient.getFieldsData('projects');
    const filteredProjects = filterData(projects, 'projects');
    const expectedObject = {
      imgSrc: expect.any(String),
      imgAlt: expect.any(String),
      videoUrl: expect.any(String),
      title: expect.any(String),
      date: expect.any(String),
      description: expect.anything(),
      url: expect.any(String),
      buttonLabel: expect.any(String),
      showOnHomepage: expect.toBeTypeOrNull(Boolean),
      order: expect.toBeTypeOrNull(Boolean),
    };
    expect(filteredProjects[0]).toMatchObject(expectedObject);
  });

  test('Board members data', async () => {
    const boardMembers = await ContentfulClient.getFieldsData('boardMembers');
    const filteredBoardMembers = filterData(boardMembers, 'boardMembers');
    const expectedObject = {
      imgSrc: expect.any(String),
      imgAlt: expect.any(String),
      name: expect.any(String),
      role: expect.any(String),
      phone: expect.any(String),
      email: expect.any(String),
      linkedinUrl: expect.any(String),
      order: expect.any(Number),
    };
    expect(filteredBoardMembers[0]).toMatchObject(expectedObject);
  });
});

describe('Check filterBasicContentData function outputs', () => {
  let basicContentHomepage;
  let basicContentProjects;
  let basicContentCooperation;
  let basicContentAboutUs;
  let common;

  beforeAll(async () => {
    basicContentHomepage = await ContentfulClient.getBasicContentData('homepage');
    basicContentProjects = await ContentfulClient.getBasicContentData('projects');
    basicContentCooperation = await ContentfulClient.getBasicContentData('cooperation');
    basicContentAboutUs = await ContentfulClient.getBasicContentData('about-us');
    common = await ContentfulClient.getBasicContentData('common');
  });

  test('Homepage top section', () => {
    const filteredTopSection = filterBasicContentData(basicContentHomepage, 'homepage-top-section');
    const expectedObject = {
      image1: expect.any(Object),
      text1: expect.any(Object),
      title: expect.any(String),
    };
    expect(filteredTopSection).toMatchObject(expectedObject);
  });

  test('Homepage Values', () => {
    const filteredValues = filterBasicContentData(basicContentHomepage, 'homepage-values');
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredValues).toMatchObject(expectedObject);
  });

  test('Homepage Values Tiles', () => {
    const filteredTile1 = filterBasicContentData(basicContentHomepage, 'homepage-tile-1');
    const filteredTile2 = filterBasicContentData(basicContentHomepage, 'homepage-tile-2');
    const filteredTile3 = filterBasicContentData(basicContentHomepage, 'homepage-tile-3');
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredTile1).toMatchObject(expectedObject);
    expect(filteredTile2).toMatchObject(expectedObject);
    expect(filteredTile3).toMatchObject(expectedObject);
  });

  test('Homepage Projects Title', () => {
    const filteredProjectsTitle = filterBasicContentData(
      basicContentHomepage,
      'homepage-projects-title',
    );
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredProjectsTitle).toMatchObject(expectedObject);
  });

  test('Homepage Partners Text', () => {
    const filteredPartnersText = filterBasicContentData(
      basicContentHomepage,
      'homepage-partners-text',
    );
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredPartnersText).toMatchObject(expectedObject);
  });

  test('Projects top section', () => {
    const filteredProjectsTopSection = filterBasicContentData(
      basicContentProjects,
      'projects-top-section',
    );
    const expectedObject = {
      image1: expect.any(Object),
      text1: expect.any(Object),
      title: expect.any(String),
    };
    expect(filteredProjectsTopSection).toMatchObject(expectedObject);
  });

  test('Projects Middle CTA Text', () => {
    const filteredProjectMiddleCTA = filterBasicContentData(
      basicContentProjects,
      'projects-middle-cta-text',
    );
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredProjectMiddleCTA).toMatchObject(expectedObject);
  });

  test('Projects Bottom CTA Text', () => {
    const filteredProjectBottomCTA = filterBasicContentData(
      basicContentProjects,
      'projects-bottom-cta-text',
    );
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredProjectBottomCTA).toMatchObject(expectedObject);
  });

  test('Cooperation top section', () => {
    const filteredCooperationTopSection = filterBasicContentData(
      basicContentCooperation,
      'cooperation-top-section',
    );
    const expectedObject = {
      image1: expect.any(Object),
      text1: expect.any(Object),
      title: expect.any(String),
    };
    expect(filteredCooperationTopSection).toMatchObject(expectedObject);
  });

  test('Cooperation Bottom CTA Text', () => {
    const filteredCooperationBottomCTA = filterBasicContentData(
      basicContentCooperation,
      'cooperation-bottom-cta',
    );
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredCooperationBottomCTA).toMatchObject(expectedObject);
  });

  test('Cooperation Logos Text', () => {
    const filteredCooperationLogosText = filterBasicContentData(
      basicContentCooperation,
      'cooperation-logos-text',
    );
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredCooperationLogosText).toMatchObject(expectedObject);
  });

  test('Cooperation Tiles and Title', () => {
    const filteredTitle = filterBasicContentData(
      basicContentCooperation,
      'cooperation-tiles-title',
    );
    const filteredTile1 = filterBasicContentData(basicContentCooperation, 'cooperation-tile-1');
    const filteredTile2 = filterBasicContentData(basicContentCooperation, 'cooperation-tile-2');
    const filteredTile3 = filterBasicContentData(basicContentCooperation, 'cooperation-tile-3');
    const filteredTile4 = filterBasicContentData(basicContentCooperation, 'cooperation-tile-4');
    const filteredTile5 = filterBasicContentData(basicContentCooperation, 'cooperation-tile-5');
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredTitle).toMatchObject(expectedObject);
    expect(filteredTile1).toMatchObject(expectedObject);
    expect(filteredTile2).toMatchObject(expectedObject);
    expect(filteredTile3).toMatchObject(expectedObject);
    expect(filteredTile4).toMatchObject(expectedObject);
    expect(filteredTile5).toMatchObject(expectedObject);
  });

  test('About us top section', () => {
    const filteredAboutUsTopSection = filterBasicContentData(
      basicContentAboutUs,
      'about-us-top-section',
    );
    const expectedObject = {
      image1: expect.any(Object),
      text1: expect.any(Object),
      title: expect.any(String),
    };
    expect(filteredAboutUsTopSection).toMatchObject(expectedObject);
  });

  test('About us content', () => {
    const filteredAboutUsContent1 = filterBasicContentData(
      basicContentAboutUs,
      'about-us-content-1',
    );
    const filteredAboutUsContent2 = filterBasicContentData(
      basicContentAboutUs,
      'about-us-content-2',
    );
    const filteredAboutUsContent3 = filterBasicContentData(
      basicContentAboutUs,
      'about-us-content-3',
    );
    const expectedObject = {
      image1: expect.any(Object),
      text1: expect.any(Object),
      title: expect.any(String),
    };
    expect(filteredAboutUsContent1).toMatchObject(expectedObject);
    expect(filteredAboutUsContent2).toMatchObject(expectedObject);
    expect(filteredAboutUsContent3).toMatchObject(expectedObject);
  });

  test('About us Bottom CTA Text', () => {
    const filteredAboutUsBottomCTA = filterBasicContentData(
      basicContentAboutUs,
      'about-us-bottom-cta',
    );
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredAboutUsBottomCTA).toMatchObject(expectedObject);
  });

  test('About us Board Members Text', () => {
    const filteredBoardMembersText = filterBasicContentData(
      basicContentAboutUs,
      'about-us-board-members-text',
    );
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredBoardMembersText).toMatchObject(expectedObject);
  });

  test('Contact Form Text', () => {
    const filteredContactFormText = filterBasicContentData(common, 'contact-form-text');
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredContactFormText).toMatchObject(expectedObject);
  });

  test('Common Form Tooltip', () => {
    const filteredContactFormText = filterBasicContentData(common, 'contact-form-tooltip');
    const expectedObject = {
      title: expect.any(String),
    };
    expect(filteredContactFormText).toMatchObject(expectedObject);
  });
});

describe('Test wheter filterLogos function returns logos', () => {
  test('Partner logos', async () => {
    const partners = await ContentfulClient.getPartnerLogos();
    const filteredLogos = JSON.stringify(filterLogos(partners)).includes('svg');
    expect(filteredLogos).toBe(true);
  });
});

describe('Test filterSocial function, wheter it returns object with socials', () => {
  test('Is object with socials returned ', async () => {
    const socials = await ContentfulClient.getBasicContentData('common');
    const filteredSocials = filterSocials(socials);
    const expectedObject = {
      fblink: expect.any(String),
      inlink: expect.any(String),
      lnlink: expect.any(String),
      ytlink: expect.any(String),
    };
    expect(filteredSocials).toMatchObject(expectedObject);
  });
});
