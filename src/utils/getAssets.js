export default function getAssets(response) {
    return response.items.map((item) => {
      const responseObject = { ...item };
  
      if (responseObject.fields.image1) {
        responseObject.fields.image1 = response.includes.Asset.find(
          (asset) => asset.sys.id === item.fields.image1.sys.id,
        );
      }
  
      if (responseObject.fields.image2) {
        responseObject.fields.image2 = response.includes.Asset.find(
          (asset) => asset.sys.id === item.fields.image2.sys.id,
        );
      }
  
      return responseObject;
    });
  }