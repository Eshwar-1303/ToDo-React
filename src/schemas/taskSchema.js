// src/schemas/taskSchema.js
const taskSchema = {
    type: 'object',
    properties: {
      title: { type: 'string' },
      description: { type: 'string' },
      dueDate: { type: 'string', format: 'date' },
      priority: { type: 'string', enum: ['Low', 'Medium', 'High'] },
    },
    required: ['title', 'dueDate', 'priority'],
  };
  