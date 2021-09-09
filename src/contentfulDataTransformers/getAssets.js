const findAsset = (res, item, field) =>
  res.includes.Asset.find((asset) => asset.sys.id === item.fields[field].sys.id);

export default function getAssets(response) {
  return response.items.map((item) => {
    const responseObject = { ...item };

    if (responseObject.fields.image1) {
      responseObject.fields.image1 = findAsset(response, item, 'image1');
    }

    if (responseObject.fields.image2) {
      responseObject.fields.image2 = findAsset(response, item, 'image2');
    }

    if (responseObject.fields.logo) {
      responseObject.fields.logo = findAsset(response, item, 'logo');
    }

    return responseObject;
  });
}
