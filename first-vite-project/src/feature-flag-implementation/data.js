const dummyAPIResponse = {
  showFilterSearch: true,
  showLightDarkMode: true,
  showRandomColor: true,
};

export default function featureFlagsDataCall() {
  return new Promise((resolve, reject) => {
    dummyAPIResponse
      ? setTimeout(resolve(dummyAPIResponse), 500)
      : reject("Error!");
  });
}
