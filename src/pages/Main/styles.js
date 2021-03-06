import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

/**
 * @const Container
 * @type {View}
 */
export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

/**
 * @const Form
 * @type {View}
 */
export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

/**
 * @const Input
 * @type {TextInput}
 */
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

/**
 * @const SubmitButton
 * @type {RectButton}
 */
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #e8a87c;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

/**
 * @const List
 * @type {FlatList}
 */
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

/**
 * @const User
 * @type {View}
 */
export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

/**
 * @const Avatar
 * @type {Image}
 */
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

/**
 * @const Name
 * @type {Text}
 */
export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

/**
 * @const Bio
 * @type {Text}
 */
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

/**
 * @const ProfileButton
 * @type {ReactButton}
 */
export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #e8a87c;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

/**
 * @const ProfileButtonText
 * @type {Text}
 */
export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
