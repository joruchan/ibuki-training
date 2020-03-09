import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default () => (
  <Card>
    <CardHeader title="Bienvenue dans ton back-office personnel!" />
    <CardContent>Sur le côté tu peux voir tes nouveaux messages et enregistrements.</CardContent>
  </Card>
);
