// Bad: Imports not grouped or sorted properly
import './styles.css';
import { Card } from '~/components/Card';
import { useState } from 'react';
import React from 'react';
import { formatDate } from '~/utils/formatDate';
import { Button } from '~/components/Button';
import { logger } from '~/utils/logger';

// Bad: No type definitions for props
export const UserCard = (props) => {
  // Bad: Destructuring in the function body instead of parameters
  const { user } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedDate = formatDate(user.createdAt);

  logger.info('Rendering user card');

  // Bad: Not specifying return type
  return (
    <Card className="user-card">
      <h2>{user.name}</h2>
      <p>Joined: {formattedDate}</p>
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </Button>
    </Card>
  );
};
