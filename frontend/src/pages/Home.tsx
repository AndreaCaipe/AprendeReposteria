import React from 'react';
import RecipeCard from '../components/RecipeCard';
import useFetchRecipes from '../hooks/useFetchRecipies';

const Home: React.FC = () => {
  const { recipes, loading } = useFetchRecipes();

  if (loading) return <p>Cargando Recetas..</p>;

  return (
    <div className="home">
      <h1 className="page-title">Aprende Reposteria </h1>
      <h2>Aprende con nuestras recetas y adquiere asistencia personalizada para aprender repostería fácil desde casa. Registrate</h2>

      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;

