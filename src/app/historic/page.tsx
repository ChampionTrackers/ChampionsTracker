import React from "react";
import Header from "../layout/header"; 

// Dados das partidas e equipes
const matchHistory = [
  {
    id: 1,
    team1: { name: "Harolds Fanatics", imgSrc: "/images/equipe1.jpg" },
    team2: { name: "Heim Spirit Breaker", imgSrc: "/images/equipe2.jpg" },
    score: "3 : 2",
    date: "08 de abril, 2023",
  },
  {
    id: 2,
    team1: { name: "Harolds Fanatics", imgSrc: "/images/equipe1.jpg" },
    team2: { name: "Heim Spirit Breaker", imgSrc: "/images/equipe2.jpg" },
    score: "3 : 2",
    date: "08 de abril, 2023",
  },
  {
    id: 3,
    team1: { name: "Harolds Fanatics", imgSrc: "/images/equipe1.jpg" },
    team2: { name: "Heim Spirit Breaker", imgSrc: "/images/equipe2.jpg" },
    score: "3 : 2",
    date: "08 de abril, 2023",
  },
];

const Tournament = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Cabeçalho do torneio */}
      <Header tournament="Torneio de Espadas" />
      
      {/* Seção de Histórico de Partidas */}
      <section className="mx-10 my-8 p-4 flex flex-col items-center">       
        {matchHistory.map((match) => (
          <div key={match.id} className="bg-primary text-white w-[584px] h-[156px] p-4 my-[24px] rounded-md flex justify-between items-center shadow-md">
            {/* Equipe 1 */}
            <div className="flex flex-col items-center gap-1">
              <img src={match.team1.imgSrc} alt={match.team1.name} className="w-12 h-12 rounded-full object-cover" />
              <span className="mx-5 font-semibold text-center">{match.team1.name}</span>
            </div>

            {/* Score */}
            <div className="text-center">
              <span className="text-xl font-bold">{match.score}</span>
              <p className="text-gray-400">{match.date}</p>
            </div>

            {/* Equipe 2 */}
            <div className="flex flex-col items-center gap-1">
              <img src={match.team2.imgSrc} alt={match.team2.name} className="w-12 h-12 rounded-full object-cover" />
              <span className="mx-5 font-semibold text-center">{match.team2.name}</span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Tournament;
