import React, { FC, ReactElement } from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import clsx from 'clsx';
import CustomCardStyles from './CustomCard.styles';

interface CustomCardProps {
  headerTitle?: string | ReactElement;
  content?: string | ReactElement;
  customStyle?: React.CSSProperties;
  withoutPaddingBottom?: boolean;
}

const CustomCard: FC<CustomCardProps> = ({
  headerTitle,
  children,
  content,
  customStyle,
  withoutPaddingBottom,
}) => {
  CustomCard.defaultProps = {
    headerTitle: '',
    content: '',
    customStyle: {},
    withoutPaddingBottom: false,
  };

  const classes = CustomCardStyles();
  return (
    <Card style={{ height: '100%', ...customStyle }}>
      {headerTitle && (
        <CardHeader
          title={headerTitle}
          classes={{ title: classes.cardHeader, root: classes.cardHeaderBox }}
        />
      )}
      <CardContent
        classes={{
          root: clsx(classes.cardContent, {
            [classes.cardContentWithoutBottomPadding]: withoutPaddingBottom,
          }),
        }}
      >
        {content || children}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
