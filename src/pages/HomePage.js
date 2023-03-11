import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis obcaecati ea expedita ipsum alias nobis quis eius, maxime earum commodi atque nihil? Sapiente aliquid totam iusto unde, beatae ullam similique.",
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego?",
    author: "Tomasz Szpak",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis obcaecati ea expedita ipsum alias nobis quis eius, maxime earum commodi atque nihil? Sapiente aliquid totam iusto unde, beatae ullam similique.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia.",
    author: "Adam Kowalski",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis obcaecati ea expedita ipsum alias nobis quis eius, maxime earum commodi atque nihil? Sapiente aliquid totam iusto unde, beatae ullam similique.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
