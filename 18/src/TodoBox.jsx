import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
  state = {
    tasks: [],
    text: '',
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = async () => {
    try {
      const { data } = await axios.get(routes.tasks());
      this.setState({ tasks: data.reverse() });
    } catch (err) {
      console.error('Ошибка загрузки задач:', err);
    }
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  addTask = async (e) => {
    e.preventDefault();
    const { text } = this.state;
    if (text.trim() === '') return;

    try {
      const { data: newTask } = await axios.post(routes.tasks(), { text });
      this.setState((prev) => ({
        tasks: [newTask, ...prev.tasks],
        text: '',
      }));
    } catch (err) {
      console.error('Ошибка при добавлении задачи:', err);
    }
  };

  toggleTask = async (id, currentState) => {
    const url =
      currentState === 'active'
        ? routes.finishTask(id)
        : routes.activateTask(id);

    try {
      const { data: updated } = await axios.patch(url);
      this.setState((prev) => {
        const idx = prev.tasks.findIndex((t) => t.id === id);
        return { tasks: update(prev.tasks, { [idx]: { $set: updated } }) };
      });
    } catch (err) {
      console.error('Ошибка переключения состояния задачи:', err);
    }
  };

  render() {
    const { tasks, text } = this.state;
    const active = tasks.filter((t) => t.state === 'active');
    const done = tasks.filter((t) => t.state === 'finished');

    return (
      <div>
        <form className="todo-form mx-3 mb-4" onSubmit={this.addTask}>
          <div className="d-flex col-md-4">
            <input
              type="text"
              className="form-control me-3"
              placeholder="I am going..."
              value={text}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </div>
        </form>

        {active.length > 0 && (
          <div className="todo-active">
            <h5 className="mb-2">Active</h5>
            {active.map((task) => (
              <Item key={task.id} task={task} onToggle={this.toggleTask} />
            ))}
          </div>
        )}

        {done.length > 0 && (
          <div className="todo-done mt-4">
            <h5 className="mb-2">Finished</h5>
            {done.map((task) => (
              <Item key={task.id} task={task} onToggle={this.toggleTask} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TodoBox;
// END
