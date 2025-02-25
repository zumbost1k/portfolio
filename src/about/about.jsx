import React from 'react';
import './about.css';

const skillsQueue = [
  {
    headerText: 'Hard skills',
    key: 'hard'
  },
  {
    headerText: 'Also dealt with',
    key: 'dealWith'
  },
  {
    headerText: 'Soft skills',
    key: 'soft'
  }
];

const skills = {
  hard: [
    'JS/TS',
    'React/Redux Toolkit',
    'Vue3/Pinia',
    'Git',
    'nestJs',
    'Jest',
    'postgreSQL'
  ],
  dealWith: ['BullJs', 'ZX', 'MongoDB', 'VUEX'],
  soft: [
    'Purposefulness',
    'Ability to work in a team',
    'Stress tolerance',
    'Attention to detail',
    'Multitasking'
  ],
  hobby: [
    'Studying books on human resources management.',
    'Studying psychology (social, family in the field of conflictology)',
    'Learning new languages (Polish B1, English B2).',
    'Music (compose poetry and music, play guitar)'
  ]
};

const About = () => {
  return (
    <section className="about_section">
      <h3 className="about_title">Hello everyone!</h3>
      <p className="about_text">
        My name is Mikhail. I specialize as a Full stack developer. This section
        presents my skills and expectations.
      </p>

      <div className="about_skill_list_container">
        {skillsQueue.map(skillsQueueItem => {
          return (
            <div key={skillsQueueItem.key}>
              <h3 className="about_skill_header">
                {skillsQueueItem.headerText}
              </h3>
              <ul className="about_skill_list">
                {skills[skillsQueueItem.key].map(skill => {
                  return (
                    <li key={skill} className="about_skill_list_item">
                      - {skill};
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <p className="about_text">
        I want to continue to grow in development and try new languages. I am
        also ready to relocate to Poland, preferably Lodz. In my previous jobs I
        was also involved in training and managing newcomers in the team, which
        I would be happy to do in the future as well.{' '}
      </p>
      <img
        className="about_img"
        width="700"
        height="500"
        src="/photos/reading.jpg"
        alt="I'm reading"
      />
      <figcaption className="about_figcaption">
        I'm reading my favorite "flat world" book series.
      </figcaption>
      <h3 className="about_skill_header">About me:</h3>
      <p className="about_text">
        I am currently developing my skills in FullStack development and team
        management. I continue learning Polish and English. I have experience
        with building complex mathematical algorithms in development, developing
        automated tests, documentation and scripting. I am open to relocation
        and have all the necessary documents to live and work in Poland.
      </p>
      <h3 className="about_skill_header">My hobbies: </h3>
      <ul className="about_skill_list">
        {skills.hobby.map(skill => {
          return (
            <li key={skill} className="about_skill_list_item">
              - {skill};
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default About;
