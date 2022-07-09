import React from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = ({ onAddTask, isLoading }) => {
  return (
    <Section>
      <TaskForm onEnterTask={onAddTask} loading={isLoading} />
    </Section>
  );
};

export default NewTask;
