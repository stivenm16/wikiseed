import React, { useState } from 'react';
import axios, {AxiosResponse} from 'axios';

//ACTIONS

//ROUTES
import apiRoutes from '../constants/apiRoutes';

//MODELS


// const [isLoading, setIsLoading] = useState(true);

const verifiedAlias = async (
  alias: string,
): Promise<any> => {
    
    try {

        // setIsLoading(true);

        const response = await axios.get<string, AxiosResponse<any, any>>(apiRoutes.verifiedAlias(alias));

        if (response.status === 201 || response.status === 200) {

          const data = response.data;

          return data;
        }

        return response.data;

        // setIsLoading(false);

    } catch (error) {
      
      // Alert.alert(
      //     'Error',
      //     'Error while trying get the current user :' + error,
      // );
              
      throw(error);
    }
};


export {
    // isLoading,
    verifiedAlias
}
