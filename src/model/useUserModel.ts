import { useState } from 'react';
import { createModel } from 'rmox';

const useUserModel = () => {
  const [age, setAge] = useState(1);
  return { age, setAge };
};
export default createModel(useUserModel, { global: true });
