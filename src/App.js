import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  // ekle butonuna tıklanınca yeni todo oluşturur
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText) {
      toast.warn('Formu doldurun', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    // todo için gerekli bilgleri içeren obje ouşturma
    const newTodo = {
      id: new Date().getTime(),
      title: todoText,
      date: new Date().toLocaleString(),
      isDone: false,
    };

    // oluşturulan todo objesini todolar stateine aktarma
    // spread opertorle önceden eklenenleri muhafaza ettik
    setTodos([...todos, newTodo]);

    // eleman eklenince formu sıfırlama
    setTodoText('');
  };

  // silme butonuna tıklandığında çalışır
  // todo dizisini gezer ve id si silinecek todonun idsine eşit olmayanları döndürür
  const handleDelete = (deletedTodo) => {
    const filtred = todos.filter((item) => item.id !== deletedTodo.id);
    setTodos(filtred);
  };

  // yapıldı butonuna tıklanıldığında çaılşır
  // 1 - düzenelenicek todonun dizideki sırasını bulma
  // 2 - düzenlenicek todonun isDone değerini terişne çevirme
  // 3 - todoyu diziden çıkarıp yerine düzenlenmiş halini koyma
  // 4 - todolar dizisinin bir kopyasını oluşturup onu güncelledik
  //  5 - güncelellenen kopyayı todoloların yerni değeri olarak tanımladık
  // ["elma" , "armut1", "karpuz"]
  const handleDone = (todo) => {
    const index = todos.findIndex((item) => item.id === todo.id);

    const newValue = !todos[index].isDone;
    const changedTodo = { ...todo, isDone: newValue };

    const newTodos = [...todos];

    newTodos.splice(index, 1, changedTodo);

    setTodos(newTodos);
  };

  return (
    <div>
      <ToastContainer />
      <h1 className="bg-dark">CRUD</h1>
      <div className="container border p-4 mt-4">
        <form onSubmit={handleSubmit} className="d-flex gap-3">
          <input
            className="form-control"
            type="text"
            placeholder="yapılcakları giriniz..."
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
          />
          <button className="btn btn-warning btn-lg">Ekle</button>
        </form>

        <div className="d-flex flex-column gap-3 py-5">
          {/* eğer state içersi boş ise ekrana yapılcak yok basıyoruz */}

          {todos.length === 0 && (
            <h4 className="text-center">Yapılacak herhangi bir işiniz yok.</h4>
          )}

          {/* eğer state içerisinde eleman varsa elemanalrı ekrana basıyoruz */}
          {todos.map((todo) => (
            <div className="border shadow p-3 d-flex justify-content-between align-items-center rounded">
              <div className="d-flex flex-column gap-2  ">
                <h5
                  style={{
                    textDecoration: todo.isDone ? 'line-through' : 'none',
                  }}
                >
                  {todo.title}
                </h5>
                <p>{todo.date}</p>
              </div>
              <div className="btn-group">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(todo);
                  }}
                >
                  Sil
                </button>
                <button className="btn btn-primary">Düzenle</button>
                <button
                  className="btn btn-success"
                  onClick={() => handleDone(todo)}
                >
                  {todo.isDone ? 'Yapıldı' : ' Yapılacak'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
