const topProjects = (data) =>
  data.filter((item) => item.showOnHomepage).sort((a, b) => a.order - b.order);

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
        buttonLabel: fields.linkCaption,
        showOnHomepage: fields.showOnHomepage ? true : null,
        order: fields.order ? fields.order : null,
      };
    }

    if (section === 'boardMembers') {
      tempObject = {
        imgSrc: imageUrl ? `https:${imageUrl}` : '',
        name: fields.name,
        role: fields.role || "Członek Zarządu",
        phone: fields.phone,
        email: fields.email,
        linkedinUrl: fields.linkedinUrl,
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

export const filterLogos = (data) => data.map((item) => ({      
    logo: `https:${item.fields.logo.fields.file.url}`,
    linkUrl: item.fields.linkUrl || "",
    altText: item.fields.name,
    order: item.fields.order || null,
    showOnHomepage: item.fields.showOnHomepage || false}))
    .sort((a, b) => b.order - a.order);