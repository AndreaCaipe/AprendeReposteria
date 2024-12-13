import React, { useState } from 'react';
import axios from 'axios';

const AddRecipe: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    ingredients: '',
    instructions: '',
    image: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/recipes', formData);
      alert('receta agregada con exito');
    } catch (error) {
      alert('Error al agregar receta');
    }
  };

  return (
    
    <div className='container'>
      <h1>Agregar un curso</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Titulo" onChange={e => setFormData({ ...formData, title: e.target.value })} />
      <input type="text" placeholder="Categoria" onChange={e => setFormData({ ...formData, category: e.target.value })} />
      <textarea placeholder="Ingredientes" onChange={e => setFormData({ ...formData, ingredients: e.target.value })} />
      <textarea placeholder="Instrucciones" onChange={e => setFormData({ ...formData, instructions: e.target.value })} />
      <input type="text" placeholder="Imagen URL" onChange={e => setFormData({ ...formData, image: e.target.value })} />
      <button type="submit">Agregar Receta</button>
    </form>
    </div>
  );
};

export default AddRecipe;