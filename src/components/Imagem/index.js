import React from 'react';
import { Card } from 'react-native-paper';

const Imagem = ({ imageUrl, title }) => {
  return (
    <Card>
      <Card.Cover source={{ uri: imageUrl }} />
      {title && <Card.Title title={title} />}
    </Card>
  );
};

export default Imagem;
