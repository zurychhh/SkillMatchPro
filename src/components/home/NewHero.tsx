import React from 'react';

const NewHero: React.FC = () => {
  return (
    <section className="bg-blue-950 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-white text-5xl font-bold mb-10">
            Oleksiak Consult - Nowa sekcja Hero
          </h1>
          <p className="text-white text-xl max-w-3xl mb-10">
            To jest nowa sekcja Hero stworzona według projektu z Figmy. Powinna być widoczna 
            na granatowym tle. Jeśli ją widzisz, oznacza to, że podstawowe renderowanie działa poprawnie.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg font-medium">
            Przycisk testowy
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewHero;