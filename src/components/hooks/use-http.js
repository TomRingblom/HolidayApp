import { useCallback } from "react";

const useHttp = (resData) =>  {
    const getRequest = useCallback(async (reqInfo) => {
    try {
      const req = await fetch(reqInfo.url, resData);
      
      if (!req.ok) {
        throw new Error(reqInfo.msg);
      }

      const res = await req.json();
      resData(res);

    } catch (error) {
      console.log(error.message);
    }
  }, [resData]);

  return {
    getRequest
  };
};

export default useHttp;