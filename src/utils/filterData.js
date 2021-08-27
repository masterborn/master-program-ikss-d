function topProjects(data) {
  return data.filter((item) => item.showOnHomepage).sort((a, b) => a.order - b.order);
}

export function filterData(response, section, page = null) {
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

export function filterBasicContent(data, filterCriteria) {
  const filteredArrayWithSingleData = data.filter(
    (item) => item.fields.identifier === filterCriteria,
  );

  let responseObject;

  if (filteredArrayWithSingleData[0].image1) {
    const imageOrVideoTitle = filteredArrayWithSingleData[0].image1.fields.title;
    const imageOrVideoURL = filteredArrayWithSingleData[0].image1.fields.file.url;
    const { contentType } = filteredArrayWithSingleData[0].image1.fields.file;

    const contentTypeArray = contentType.split('/');

    delete filteredArrayWithSingleData[0].fields.image1;

    responseObject = {
      imageOrVideoURL,
      imageOrVideoTitle,
      contentType: contentTypeArray[0],
      ...filteredArrayWithSingleData[0].fields,
    };
  }

  responseObject = { ...filteredArrayWithSingleData[0].fields };

  if (responseObject.text1) {
    delete responseObject.identifier;
    delete responseObject.page;
    responseObject.text = responseObject.text1;
    delete responseObject.text1;
    return responseObject;
  }

  return responseObject;
}
