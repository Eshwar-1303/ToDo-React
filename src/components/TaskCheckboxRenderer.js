import React from 'react';
import { JsonForms } from '@jsonforms/react';

const TaskCheckboxRenderer = ({ schema, data, path }) => {
  return (
    <JsonForms
      schema={schema}
      uischema={{
        type: 'Control',
        scope: path,
      }}
      data={data}
    />
  );
};

export default TaskCheckboxRenderer;
