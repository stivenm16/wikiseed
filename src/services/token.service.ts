import axios, {AxiosResponse} from 'axios';

//ROUTES
import apiRoutes from '../constants/apiRoutes';

//COMPONENTS
import { Alert } from 'react-native';

export const validateToken = async (
  accessToken: string,
): Promise<any> => {
  try {

    const response = await axios.post<string, AxiosResponse<string, string>>(
        apiRoutes.validateToken,
        {accessToken}
    );

    return response;
      
  } catch (error) {
    Alert.alert(
      'Error',
      'Error while trying to recover user' + error,
    );
  }
};

export const refreshToken = async (
  accessToken: string,
): Promise<void> => {
try {

  const response = await axios.put<string, AxiosResponse<any, any>>(
    apiRoutes.refreshToken,
    {accessToken}
  );

  console.log('refreshToken', response.data);
    
} catch (error) {
  Alert.alert(
    'Error',
    'Error while trying to recover user' + error,
  );
}
};