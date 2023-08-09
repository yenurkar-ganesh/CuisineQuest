const queryStrings = {
  app_id: process.env.REACT_APP_APP_ID,
  app_key: process.env.REACT_APP_APP_KEY,
};



//https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=dafc51de&app_key=be7182eae3fc0aed767198c505d169f2
export const fetchData = async (defaultQuery) => {
  const { app_id, app_key } = queryStrings;

  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=dafc51de&app_key=be7182eae3fc0aed767198c505d169f2`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error, "Something went Wrong");
    return error;
  }
};
