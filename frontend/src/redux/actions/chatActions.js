import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

export const createRequest = (messageText) => {
  return {
    id: uuidv4(),
    chatID: Cookies.get('chatID'),
    type: 'request',
    text: messageText
  };
}

export const createResponse = (message) => {
  return {
    id: uuidv4(),
    chatID: message.chatID,
    type: message.type,
    text: message.text
  };
}