import React from 'react';
import { JsonForms } from '@jsonforms/react';

const TaskPriorityRenderer = ({ schema, data, path, onChange }) => {
  return (
    <JsonForms
      schema={schema}
      uischema={{
        type: 'Control',
        scope: path,
        options: {
          format: 'color', // This is a placeholder for color-coding
        },
      }}
      data={data}
      onChange={onChange}
    />
  );
};

export default TaskPriorityRenderer;
