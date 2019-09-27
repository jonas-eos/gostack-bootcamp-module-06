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
`;
