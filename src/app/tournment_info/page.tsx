import React from "react";
import Header from "../layout/header"; 
import TournamentInfo from "../layout/info";

const Tournament = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header tournament="Torneio de Espadas" />

      {/* Seção de descrição e informações */}
      <section className="mx-20 my-10 p-6 flex justify-between">
        <div className="w-2/3">
          <h1 className="text-2xl font-bold mb-4">Descrição</h1>
          <p className="mr-5">
            Lorem ipsum dolor sit amet est ut et consequat nonumy dolor et
            accusam justo dolor. Sea justo dignissim justo nonumy duo diam
            praesent diam rebum amet et dolor vel aliquyam. Autem vel magna
            dolor labore vero sea exerci vero amet tempor duo dolore diam
            accusam at diam. In soluta dolores nonummy lorem dolores voluptua
            ipsum tempor clita sed. Duo justo vero ea eos at dolor nulla accusam
            dolore. Magna delenit dolor magna vulputate lobortis dolor eum et
            eirmod. Eirmod nostrud justo nonumy et zzril dolores aliquyam eirmod
            diam sed justo diam dolores. Delenit duo sit tempor diam. At diam
            justo stet tempor invidunt est duo augue molestie at dolores et
            feugiat ea illum dolores eros hendrerit.
          </p>
        </div>
        {/* Chamando as informações */}
        <div className="w-1/3">
          <TournamentInfo />
        </div>
      </section>

      <section className="mx-20 my-10 flex justify-between">
        {/* Equipes Inscritas */}
        <div className="w-1/2 text-white">
        <h1 className="text-2xl ml-5 font-bold mb-4 m-6">Equipes Inscritas</h1>
          <div className="flex ml-5 gap-6 bg-primary p-12 rounded-lg shadow-lg">
            {/* Aqui adicionamos as imagens das equipes */}
            <img src="../assets/profile.png" alt="Equipe 1" className="w-12 h-12 rounded-full" />
            <img src="../assets/profile.png" alt="Equipe 2" className="w-12 h-12 rounded-full" />
            <img src="../assets/profile.png" alt="Equipe 3" className="w-12 h-12 rounded-full" />
            <img src="../assets/profile.png" alt="Equipe 4" className="w-12 h-12 rounded-full" />
            <img src="../assets/profile.png" alt="Equipe 5" className="w-12 h-12 rounded-full" />
            <img src="../assets/profile.png" alt="Equipe 6" className="w-12 h-12 rounded-full" />
          </div>
        </div>

        {/* Localização */}
        <div className="w-1/2 text-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Localização</h1>
          <div className="h-25 rounded-md overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Washington,DC"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Botões de Palpitar e Participar */}
      <section className="flex justify-center gap-6 mt-10">
        <button className="text-black font-bold bg-accent px-4 py-3 rounded-[16px] hover:bg-accent-light">
          Palpitar
        </button>
        <button className="text-black font-bold bg-accent px-4 py-3 rounded-[16px] hover:bg-accent-light">
          Participar
        </button>
      </section>
    </main>
  );
};

export default Tournament;
