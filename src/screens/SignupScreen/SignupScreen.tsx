import React from 'react';
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

import { SignupScreenNavigation } from './SignupScreenType';

import IMAGES from '@/assets';
import { RouteName } from '@/navigation';

const SignupScreen = () => {
  const navigation = useNavigation<SignupScreenNavigation>();

  const handleLogin = () => navigation.push(RouteName.Login);

  return (
    <View className="bg-white h-full w-full">
      <StatusBar barStyle="light-content" />
      <Image className="h-full w-full absolute" source={IMAGES.background} />

      {/* lights */}
      <View className="flex-row justify-between w-full absolute px-4">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          source={IMAGES.light}
          className=" h-[200] w-[90]"
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          source={IMAGES.light}
          className="h-[140] w-[65] opacity-75"
        />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-[50%] pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1500).springify()}
            className="text-white font-bold tracking-wider text-5xl"
          >
            Sign Up
          </Animated.Text>
        </View>

        {/* form */}
        {/* <View className="flex items-center mx-6 space-y-4"> */}
        <ScrollView className="flex mt-28 mx-6 space-y-4" showsVerticalScrollIndicator={false}>
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="User name" placeholderTextColor={'gray'} autoFocus />
          </Animated.View>

          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={'gray'} autoFocus />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry />
          </Animated.View>

          <Animated.View className="w-full" entering={FadeInDown.delay(400).duration(1000).springify()}>
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">Register</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            className="flex-row justify-center"
          >
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignupScreen;
