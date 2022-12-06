import { Button, Image, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useCallback } from 'react';
import { useEnv, useNavigationBar } from 'taro-hooks';
import { AtButton } from 'taro-ui';
import useUserModel from '../../model/useUserModel';
import logo from './hook.png';
import './index.scss';

const Index = () => {
  const env = useEnv();
  const { age, setAge } = useUserModel();
  const [, { setTitle }] = useNavigationBar({ title: 'Taro Hooks' });
  const handleModal = useCallback(() => {
    setAge(age + 1);
    Taro.navigateTo({
      url: '/pages/mine/index',
    });
    // show({ content: '不如给一个star⭐️!' }).then(() => {
    //   showToast({ title: '点击了支持!' });
    // });
  }, [setAge, age]);

  return (
    <View className="wrapper">
      <AtButton>按钮文案</AtButton>
      <AtButton type="primary">按钮文案</AtButton>
      <AtButton type="secondary">按钮文案</AtButton>
      <Image className="logo pt-[20rpx]" src={logo} />
      <Text className="title">为Taro而设计的Hooks Library{age}</Text>
      <Text className="desc">
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks! 并结合ahook适配Taro!
      </Text>
      <View className="list">
        <Text className="label">运行环境</Text>
        <Text className="note">{env}</Text>
      </View>
      <Button className="button" onClick={() => setTitle('Taro Hooks Nice!')}>
        设置标题
      </Button>
      <Button className="button" onClick={handleModal}>
        使用Modal
      </Button>
    </View>
  );
};

export default Index;
