// src/components/Board.tsx
import React, { useState } from "react";
import { Linkedin } from "lucide-react";
import styles from "./Board.module.css";

type Member = {
  id: string;
  name: string;
  title: string; // single latest title
  intro?: string; // short 2-3 line intro
  bio?: string; // full bio
  imgSrc: string;
  linkedin?: string;
};

const members: Member[] = [
  {
    id: "rajat-moona",
    name: "Prof Rajat Moona",
    title: "Chairman, IITGN Competency Development Foundation\nDirector, IIT Gandhinagar",
    intro:
      "Chairman of IITGN Competency Development Foundation, providing strategic leadership across academic and research programs.",
    bio: "Prof Rajat Moona leads IITGN CDF as Chairman while serving as Director of IIT Gandhinagar. He has a long track record in computing and institutional leadership, overseeing initiatives that bridge academia, industry collaboration, and national-level technology programs.",
    imgSrc: "/images/Board_1.jpg",
    linkedin: "https://www.linkedin.com/in/rajatmoona/",
  },
  {
    id: "vimal-mishra",
    name: "Prof Vimal Mishra",
    title: "Director, IITGN Competency Development Foundation\nDean, Research and Development, Indian Institute of Gandhinagar",
    intro:
      "Director at IITGN CDF and Dean of Research & Development at IIT Gandhinagar, focused on advancing research collaborations and translational projects.",
    bio: "Prof Vimal Mishra oversees research strategy and partnerships across IIT Gandhinagar and contributes to the leadership of IITGN Competency Development Foundation. His work spans interdisciplinary research and capacity-building in higher education.",
    imgSrc: "/images/Board_5.jpg",
    linkedin: "https://www.linkedin.com/in/vimal-mishra-21162265/",
  },
  {
    id: "amit-prashant",
    name: "Prof Amit Prashant",
    title: "Director, IITGN Competency Development Foundation\nDean, External Relations, Indian Institute of Gandhinagar",
    intro:
      "Director at IITGN CDF and Dean of External Relations, driving institutional partnerships and outreach.",
    bio: "Prof Amit Prashant leads external relations and partnership initiatives at IIT Gandhinagar while supporting the strategic goals of the Competency Development Foundation through academic and industry engagement.",
    imgSrc: "/images/Board_2.jpg",
    linkedin: "https://www.linkedin.com/in/amit-prashant-3865271a9/",
  },
  {
    id: "prem-kumar-chopra",
    name: "Shri Prem Kumar Chopra",
    title: "Director, IITGN Competency Development Foundation\nRegistrar, IIT Gandhinagar",
    intro:
      "Registrar at IIT Gandhinagar and Director at IITGN CDF, overseeing administration and governance aspects.",
    bio: "Shri Prem Kumar Chopra brings administrative leadership to IITGN CDF and IIT Gandhinagar, ensuring operational excellence and institutional governance across programs and activities.",
    imgSrc: "/images/Board_3.jpg",
    linkedin: "https://www.linkedin.com/in/pk-chopra",
  },
  {
    id: "sam-placid",
    name: "Shri Sam Placid",
    title: "Chief Executive Officer, IITGN Competency Development Foundation\nFormer Chief - Executive Education & Corporate Relations",
    intro:
      "CEO of IITGN CDF with experience leading executive education and corporate relations initiatives.",
    bio: "Shri Sam Placid serves as CEO of IITGN CDF, bringing deep experience in executive education and corporate partnership development. He leads program delivery, industry engagement, and strategic operations for the foundation.",
    imgSrc: "/images/Board_4.jpg",
    linkedin: "https://www.linkedin.com/in/psam01/",
  },
  {
    id: "sunil-parekh",
    name: "Dr. Sunil Parekh",
    title: "Director, IITGN Competency Development Foundation\nSenior Advisor, Zydus Life Sciences & Jubilant Bhartia Group",
    intro:
      "Director at IITGN CDF and senior industry advisor with extensive leadership in life sciences and corporate strategy.",
    bio: "Dr. Sunil Parekh contributes industry perspective and strategic advice to IITGN CDF, drawing on senior leadership roles across life sciences and corporate sectors to strengthen industry-academic collaboration.",
    imgSrc: "/images/Board_7.jpg",
    linkedin: "https://www.linkedin.com/in/sunilrparekh/",
  },
  {
    id: "narimha-mannepalli",
    name: "Shri Narimha Rao Mannepalli",
    title: "Director, IITGN Competency Development Foundation\nStrategic Advisor, Cognizant; Former EVP, Infosys",
    intro:
      "Director at IITGN CDF and strategic advisor with strong industry leadership experience in IT services and consulting.",
    bio: "Shri Narimha Rao Mannepalli brings strategic advisory experience from leadership roles at major IT services firms and supports IITGN CDF's mission to align programs with industry needs.",
    imgSrc: "/images/Board_6.jpg",
    linkedin: "https://www.linkedin.com/in/narry-mannepalli/",
  },
];

export const Board: React.FC<{ membersList?: Member[] }> = ({
  membersList,
}) => {
  const list = membersList ?? members;
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  };

  return (
    <section aria-labelledby="board-heading" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2
            id="board-heading"
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6"
          >
            Board of Directors
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Distinguished Leaders and Experts guiding the Competency Development
            Foundation and strengthening industry-academia partnerships.
          </p>
        </div>

        <div className={`mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 pt-16 place-items-center ${styles['board-grid']}`}>
          {list.map((m, index) => (
            <div
              key={m.id}
              className={`
    ${styles["premium-card"]} group relative rounded-2xl p-6 pt-20 
    backdrop-blur-xl bg-card/70 border border-white/20 
    shadow-soft hover:shadow-xl transition-all duration-300 
    animate-fade-in ${styles[`delay-${index * 100}`]}
  `}
            >
              {/* AVATAR */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10">
                <div className={styles["avatar-wrapper"]}>
                  <img
                    src={m.imgSrc}
                    alt={m.name}
                    loading="lazy"
                    className={styles["avatar-image"]}
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="text-center flex flex-col items-center mt-2 w-full">
                {/* NAME + LINKEDIN */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className={styles["premium-name"]}>{m.name}</h3>

                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${m.name} on LinkedIn`}
                      className={styles["linkedin-button"]}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* TITLE (DESIGNATIONS) */}
                <p className={styles["premium-title"]}>{m.title}</p>

                {/* SHORT INTRO */}
                {!expanded[m.id] && <p className={styles["premium-intro"]}>{m.intro}</p>}

                {/* FULL BIO */}
                {expanded[m.id] && <p className={styles["premium-bio"]}>{m.bio}</p>}

                {/* TOGGLE */}
                {m.bio && (
                  <button
                    onClick={() => toggle(m.id)}
                    className={styles["premium-toggle"]}
                  >
                    {expanded[m.id] ? "Show Less ←" : "Read More →"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
