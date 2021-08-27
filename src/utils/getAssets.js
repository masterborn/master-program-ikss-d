export default function getAssets(response) {
  return response.items.map((item) => {
    const responseObject = { ...item };

    if (responseObject.image1) {
      responseObject.image1 = response.includes.Asset.find(
        (asset) => asset.sys.id === item.fields.image1.sys.id,
      );
    }

    if (responseObject.image2) {
      responseObject.image2 = response.includes.Asset.find(
        (asset) => asset.sys.id === item.fields.image2.sys.id,
      );
    }

    return responseObject;
  });
}
