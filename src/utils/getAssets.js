export default function getAssets(response) {
  return response.items.map((item) =>
    item.fields.image1
      ? {
          ...item,
          image1: response.includes.Asset.find(
            (asset) => asset.sys.id === item.fields.image1.sys.id,
          ),
        }
      : item,
  );
}
