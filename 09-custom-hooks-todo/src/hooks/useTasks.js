import { useState, useCallback } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (requestConfig) => {
    try {
      const res = await fetch(requestConfig.url, {
        method: requestConfig.method ?? 'GET',
        headers: requestConfig.headers ?? {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestConfig.body) ?? null,
      });
      return await res.json();
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const requestAddTask = useCallback(
    async (taskText) => {
      const data = await sendRequest({
        url: process.env.REACT_APP_API_URL,
        method: 'POST',
        body: { text: taskText },
      });
      const generatedId = data.name;
      const createdTask = { id: generatedId, text: taskText };
      taskAddHandler(createdTask);
    },
    [sendRequest],
  );

  const fetchTasks = useCallback(async () => {
    const data = await sendRequest({ url: process.env.REACT_APP_API_URL });
    const loadedTasks = Object.keys(data).reduce((accTasks, key) => {
      accTasks.push({
        id: key,
        text: data[key].text,
      });
      return accTasks;
    }, []);
    setTasks(loadedTasks);
  }, [sendRequest]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return {
    tasks,
    setTasks,
    requestAddTask,
    fetchTasks,
    error,
    isLoading,
  };
};

export default useTasks;
