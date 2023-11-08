import React from 'react';
import { JsonForms } from '@jsonforms/react';

const TaskDatePickerRenderer = ({ schema, data, path, onChange }) => {
  return (
    <JsonForms
      schema={schema}
      uischema={{
        type: 'Control',
        scope: path,
        options: {
          format: 'date-picker', // Implement a custom date picker
        },
      }}
      data={data}
      onChange={onChange}
    />
  );
};

export default TaskDatePickerRenderer;
