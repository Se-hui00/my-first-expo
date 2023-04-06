import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

const MyButton = ({ title, a, b, c, onPress }) => {
  console.log(title, a, b, c);

  // const subject = title || "기본버튼";
  // const subject = title ?? '기본버튼';
  
  return (  //한 문장일 경우 () 생략 가능
    <TouchableOpacity
      style={{
        // flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: 'pink',
      }}
      onPress={onPress}
    >
      {/* <Text style={{ fontSize: 24, margin: 5 }}>{subject}</Text> */}
      <Text style={{ fontSize: 24, margin: 5 }}>{title}</Text>
    </TouchableOpacity>
  );
};

// 기본값 설정
// MyButton.defaultProps = {
//   title: '기본버튼',
// };

// 기본값 설정, 타입, 필수선택 여부 설정
MyButton.propTypes = {
  title: PropTypes.string.isRequired, //title에는 문자열이 필수
  onPress: PropTypes.func,            //onPress에는 func만
};

export default MyButton;
