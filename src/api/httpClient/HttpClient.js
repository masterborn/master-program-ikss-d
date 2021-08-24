import axios from 'axios';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

class HttpClient {
  constructor(path) {
    this.api = axios.create({
      baseURL: `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}${path}`,
    });
  }

  getData() {
    return axios
      .get(this.api.defaults.baseURL)
      .catch((err) => {
        throw err;
      })
      .then((res) => res.data);
  }

  getFilteredData(filterCriteria) {
    return this.getConnectedData()
      .then((res) => {
        const filteredArrayWithSingleData = res.filter(
          (item) => item.fields.identifier === filterCriteria,
        );

        if (filteredArrayWithSingleData[0].image1) {
          const imageOrVideoTitle = filteredArrayWithSingleData[0].image1.fields.title;
          const imageOrVideoURL = filteredArrayWithSingleData[0].image1.fields.file.url;
          const { contentType } = filteredArrayWithSingleData[0].image1.fields.file;

          const contentTypeArray = contentType.split('/');

          delete filteredArrayWithSingleData[0].fields.image1;

          return {
            imageOrVideoURL,
            imageOrVideoTitle,
            contentType: contentTypeArray[0],
            ...filteredArrayWithSingleData[0].fields,
          };
        }

        return { ...filteredArrayWithSingleData[0].fields };
      })
      .then((res) => {
        if (res.text1) {
          const text = documentToHtmlString(res.text1);
          delete res.text1;
          delete res.identifier;
          delete res.page;
          return { ...res, text };
        }
        return res;
      });
  }

  getFilteredProjectsData(page = 'projects') {
    return this.getData()
      .then((res) =>
        res.items.map((item) => {
          const { fields } = item;

          const imageUrl = res.includes.Asset.find((asset) => asset.sys.id === fields.image.sys.id);

          const tempObject = {
            imgSrc: imageUrl.fields.file.url ? imageUrl.fields.file.url : '',
            imgAlt: fields.title,
            videoUrl: fields.videoUrl ? fields.videoUrl : '',
            title: fields.title,
            date: fields.date,
            description: fields.description.content[0].content[0].value,
            url: fields.linkUrl,
            buttonLabel: fields.linkCaption,
            showOnHomepage: fields.showOnHomepage ? true : null,
            order: fields.order ? fields.order : null,
          };

          return tempObject;
        }),
      )
      .then((data) => {
        if (page === 'homepage') {
          return data.filter((item) => item.showOnHomepage).sort((a, b) => a.order - b.order);
        }
        return data;
      });
  }

  getConnectedData() {
    return this.getData().then((res) =>
      res.items.map((item) =>
        item.fields.image1
          ? {
              ...item,
              image1: res.includes.Asset.find(
                (asset) => asset.sys.id === item.fields.image1.sys.id,
              ),
            }
          : item,
      ),
    );
  }
}

export default HttpClient;
