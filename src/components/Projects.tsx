import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: "0",
    title: "Number Guessing Game",
    description: "How lucky are you? Guess the number & Find out",
    image: "/project0.jpg",
    tags: ["React", "Node", "CSS", "Typescript"]
  },
  {
    id: "1",
    title: "Countdown Timer",
    description: "Countdown Begins! Stay on Schedule",
    image: "/project1.jpg",
    tags: ["React", "Node", "CSS", "Typescript"]
  },
  {
    id: "2",
    title: "ATM Machine",
    description: "Banking at your Fingertips! Access now",
    image: "/project2.jpg",
    tags: ["React", "Node", "CSS", "Typescript"]
  },
  {
    id: "3",
    title: "To-Do List",
    description: "Get Organized! Stay on top of your To-Do's.",
    image: "/project3.jpg",
    tags: ["React", "Node", "CSS", "Typescript"]
  },
  {
    id: "4",
    title: "Currency Converter Project",
    description: "Currency Genius! Convert currencies with ease",
    image: "/project4.jpg",
    tags: ["React", "Node", "CSS", "Typescript"]
  },
  {
    id: "5",
    title: "Student Management System",
    description: "Education Elevated! Simplify Student management",
    image: "/project5.jpg",
    tags: ["React", "Node", "CSS", "Typescript"]
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
      <Heading title="My Projects" />
      {/* <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center"> */}
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center min-w-[18rem] min-h-[24rem]">

        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            description={el.description}
            img={el.image}
            tags={el.tags}
          />
        ))}
      </div>

      {/* <div className="p-4 space-y-4">
        <div className="text-4xl font-extralight">
          {title}
        </div>
        <div>
          {description}
        </div>
        <div>
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Projects;
