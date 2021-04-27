import * as todo from './controllers/todos';

const router = (app) => {
   
    app.put('/api/todos', todo.add);
    app.post('/api/todos', todo.update);
    app.get('/api/todos', todo.viewTodos);
}
export default router;