import React from 'react';
import { Text } from 'react-native';

const CurrencyDisplay = ({ amount1 }) => {
  const formattedAmount = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount1);

  return <Text>{formattedAmount}</Text>;
};

export default CurrencyDisplay;