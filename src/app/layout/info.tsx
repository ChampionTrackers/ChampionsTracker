import React from "react";

const tournamentDetails = [
  {
    id: 1,
    label: "Qtd de Equipes",
    detail: "6",
  },
  {
    id: 2,
    label: "Qtd de Palpitadores",
    detail: "3",
  },
  {
    id: 3,
    label: "Fechamento dos Palpites",
    detail: "15 de abril, 2023",
  },
  {
    id: 4,
    label: "CTCoins Investidos",
    detail: "53",
  },
];

const TournamentInfo = () => {
  return (
    <div className="w-full ">
      <h2 className="text-xl font-bold mb-4">Informações</h2>
      <ul className="space-y-2 bg-primary text-white p-6 rounded-lg shadow-lg">
        {tournamentDetails.map((item) => (
          <li key={item.id} className="flex justify-between text-sm md:text-base">
            <span>{item.label}:</span>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TournamentInfo;
