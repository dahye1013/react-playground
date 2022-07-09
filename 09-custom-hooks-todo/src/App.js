import React, { useEffect } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useTasks from './hooks/useTasks';

const App = () => {
  const {
    tasks,
    fetchTasks: fetchTaskHandler,
    requestAddTask: taskAddHandler,
    isLoading,
    error,
  } = useTasks();

  useEffect(() => {
    fetchTaskHandler();
  }, [fetchTaskHandler]);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTaskHandler} />
    </React.Fragment>
  );
};

export default App;
