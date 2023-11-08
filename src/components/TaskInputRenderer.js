import React from 'react';
import { JsonForms } from '@jsonforms/react';

const TaskInputRenderer = ({ schema, data, path, onChange }) => {
  return (
    <JsonForms
      schema={schema}
      uischema={{
        type: 'Control',
        scope: path,
      }}
      data={data}
      onChange={onChange}
    />
  );
};

export default TaskInputRenderer;
