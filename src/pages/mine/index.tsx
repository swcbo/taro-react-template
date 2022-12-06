import { Text } from '@tarojs/components';
import useUserModel from '@/model/useUserModel';

const MinePage = () => {
  const { age } = useUserModel();
  return <Text>{age}</Text>;
};
export default MinePage;
