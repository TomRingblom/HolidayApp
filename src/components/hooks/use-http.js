const useHttp = (reqInfo, resData) => {
    const getRequest = async (input) => {
    try {
      const req = await fetch(reqInfo + input, resData);
      
      if (!req.ok) {
        throw new Error("error");
      }

      const res = await req.json();
      resData(res);

    } catch (error) {
      console.log(error.message);
    }
  };

  return {
    getRequest
  };
};

export default useHttp;