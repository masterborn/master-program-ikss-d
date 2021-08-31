const topProjects = (data) => data.filter((item) => item.showOnHomepage).sort((a, b) => a.order - b.order);

const addImages = (data) => {

  let resultObject = data;

  const imageOrVideoTitle = resultObject.fields.title;
  const imageOrVideoURL = `https:${resultObject.fields.image1.fields.file.url}`;

    delete resultObject.fields.image1;

    resultObject = {
      imageOrVideoURL,
      imageOrVideoTitle,
      ...resultObject.fields,
    };

    if (data.fields.image2) {
      const imageTwoTitle = resultObject.fields.title;
      const imageTwoURL = `https:${resultObject.fields.image1.fields.file.url}`;
  
      delete resultObject.fields.image2;
  
      resultObject = {
        imageTwoURL,
        imageTwoTitle,
        ...resultObject.fields,
      };
    }

    return resultObject;
}

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
        role: fields.role,
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
}

export const filterBasicContentData = (data, filterCriteria) => {
  const filteredArrayWithSingleData = data.filter(
    (item) => item.fields.identifier === filterCriteria,
  );

  let responseObject = filteredArrayWithSingleData[0].fields;

  if (filteredArrayWithSingleData[0].fields.image1) {
    responseObject = addImages(filteredArrayWithSingleData[0]);
  }

  delete responseObject.identifier;
  delete responseObject.page;

  return responseObject;
}