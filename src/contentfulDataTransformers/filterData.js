const topProjects = (data) =>
  data
    .filter((item) => item.showOnHomepage)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3)
    .sort((a, b) => {
      const yearA = a.date.split('-');
      const yearB = b.date.split('-');
      if (yearA[0] === yearB[0]) {
        if (yearA[1] === yearB[1]) {
          return Number(yearB[2]) - Number(yearB[2]);
        }
        return Number(yearB[1]) - Number(yearB[1]);
      }
      return Number(yearB[0]) - Number(yearA[0]);
    });

const addImages = (data, field) => {
  const resultObject = data;

  const { contentType } = resultObject[field].fields.file;
  const { title } = resultObject[field].fields;

  const contentTypeArray = contentType.split('/');

  const url = `https:${resultObject[field].fields.file.url}`;

  delete resultObject[field];

  return {
    url,
    title,
    contentType: contentTypeArray[0],
  };
};

export const filterData = (response, section, page = null) => {
  const responseObject = response.items.map((item) => {
    const { fields } = item;

    let imageUrl = '';

    if (fields.image) {
      imageUrl = response.includes.Asset.find((asset) => asset.sys.id === fields.image.sys.id)
        .fields.file.url;
    }

    let tempObject;

    if (section === 'projects') {
      tempObject = {
        imgSrc: imageUrl ? `https:${imageUrl}` : '',
        imgAlt: fields.title,
        videoUrl: fields.videoUrl ? fields.videoUrl : '',
        title: fields.title,
        date: fields.date,
        description: fields.description,
        url: fields.linkUrl,
        buttonLabel: fields.linkCaption || '',
        showOnHomepage: fields.showOnHomepage ? true : null,
        order: fields.order ? fields.order : null,
      };
    }

    if (section === 'boardMembers') {
      tempObject = {
        imgSrc: imageUrl ? `https:${imageUrl}` : '',
        imgAlt: fields.name,
        name: fields.name,
        role: fields.role,
        phone: fields.phone || '',
        email: fields.email || '',
        linkedinUrl: fields.linkedinUrl || '',
        order: fields.order ? fields.order : null,
      };
    }

    return tempObject;
  });

  if (page === 'homepage') {
    return topProjects(responseObject);
  }
  return responseObject;
};

export const filterBasicContentData = (data, filterCriteria) => {
  const filteredArrayWithSingleData = data.filter(
    (item) => item.fields.identifier === filterCriteria,
  );

  const responseObject = filteredArrayWithSingleData[0].fields;

  if (responseObject.image1) responseObject.image1 = addImages(responseObject, 'image1');
  if (responseObject.image2) responseObject.image2 = addImages(responseObject, 'image2');

  delete responseObject.identifier;
  delete responseObject.page;

  return responseObject;
};

export const filterLogos = (data) =>
  data
    .map((item) => ({
      logo: `https:${item.fields.logo.fields.file.url}`,
      linkUrl: item.fields.linkUrl || '',
      altText: item.fields.name,
      order: item.fields.order || null,
      showOnHomepage: item.fields.showOnHomepage || false,
    }))
    .sort((a, b) => b.order - a.order);

export const filterHomePageLogos = (data) => {
  const sortedLogos = filterLogos(data);

  return sortedLogos.filter((logo) => logo.showOnHomepage);
};

export const filterSocials = (data) => ({
  fblink: filterBasicContentData(data, 'social-facebook').linkUrl,
  inlink: filterBasicContentData(data, 'social-instagram').linkUrl,
  ytlink: filterBasicContentData(data, 'social-youtube').linkUrl,
  lnlink: filterBasicContentData(data, 'social-linkedin').linkUrl,
});
