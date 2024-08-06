const shapes = document.querySelectorAll('.shape');
const dropAreas = document.querySelectorAll('.drop-area');

let draggedShape = null;

// Add dragstart event listeners to all shapes
shapes.forEach(shape => {
  shape.addEventListener('dragstart', dragStart);
});

// Add dragover and drop event listeners to all drop areas
dropAreas.forEach(dropArea => {
  dropArea.addEventListener('dragover', dragOver);
  dropArea.addEventListener('drop', drop);
});

// Drag Functions
function dragStart() {
  draggedShape = this;
  console.log(draggedShape);
  setTimeout(() => (this.style.opacity = '0.5'), 0);
}

function dragOver(e) {
  e.preventDefault();
}

function drop() {
  const shapeId = draggedShape.getAttribute('id');
  const dropAreaId = this.getAttribute('id').replace('drop-', '');
  if (shapeId === dropAreaId) {
    this.appendChild(draggedShape);
    draggedShape.style.opacity = '1';
  }
  draggedShape = null;
}