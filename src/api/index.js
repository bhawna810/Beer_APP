

export const getAllProducts = async (page, setError ) => {
    try {
      const res = await fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=4`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
    //   console.log(result);
      return result;
    } catch (err) {
      setError(err);
      return null;
    } 
  };

export const getSearchedProduct = async (value, setSearchedProduct) => {
    try{
       const res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${value}`);
       if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      setSearchedProduct(result);
    }catch(err){
        console.log(err);
    }
  }