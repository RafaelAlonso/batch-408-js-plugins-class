import Sortable from 'sortablejs';

const initSortable = () => {
  const el = document.getElementById('movies');
  const options = {
    animation: 500,
    ghostClass: "ghost",
    onEnd: (event) => {
      alert(`${event.oldIndex + 1} moved to ${event.newIndex + 1}`);
    }
  }

  const sortable = Sortable.create(el, options);
}

export { initSortable };
