// Consts
const textTheme = "text-[#00f9d0]";
const bgTheme = "bg-[#00f9d0]";
const bgPrimary = "bg-[#000]";
const bgSecondary = "bg-[#16191e]";
const bgShadow = "shadow-[inset_0_1px_0px_0px_rgba(255,255,255,0.06)]";

const myEmail = "iamthanusan@gmail.com";
const myLinkedIn =
  "https://lk.linkedin.com/in/balathanusan-jeyarasan-99016117b";
const myGitHub = "https://github.com/Balathanusan";

const skills = [
  {
    name: "Html",
    icon: "html.svg",
  },
  {
    name: "Css",
    icon: "css.svg",
  },
  {
    name: "JavaScript",
    icon: "javascript.svg",
  },
  {
    name: "Sass",
    icon: "sass.svg",
  },
  {
    name: "Tailwind",
    icon: "tailwind.svg",
  },
  {
    name: "TypeScript",
    icon: "typescript.svg",
  },
  {
    name: "Vue",
    icon: "vue.svg",
  },
  {
    name: "Nuxt",
    icon: "nuxt.svg",
  },
  {
    name: "React",
    icon: "react.svg",
  },
  {
    name: "Next",
    icon: "nextjs.svg",
    iconInvert: true,
  },
  {
    name: "Angular",
    icon: "angular.svg",
  },
  {
    name: "NodeJs",
    icon: "nodejs.svg",
  },
  {
    name: "Ionic",
    icon: "ionic.svg",
  },
  {
    name: "Git",
    icon: "github.svg",
    iconInvert: true,
  },
  {
    name: "Docker",
    icon: "docker.svg",
  },
  {
    name: "Photoshop",
    icon: "photoshop.svg",
  },
];

const projects = [
  {
    title: "Guider Labs India Pvt Ltd.",
    period: "Mar 2022 - Mar 2023",
    items: [
      {
        name: "Trainn - Marketing Site",
        technologies: "Vue | Nuxt | Sass | CMS",
        image: "trainn-website.png",
        link: "https://trainn.co/",
        description:
          "Developed this marketing site showcases the features of the SaaS product Trainn.",
      },
      {
        name: "Trainn - WebApp",
        technologies: "Vue | Sass",
        image: "trainn-webapp.png",
        link: "https://app.trainn.co/",
        description:
          "Created a comprehensive web app, enabling users to create, edit, and share product videos with advanced editing features.",
      },
      {
        name: "Interview Assessment",
        technologies: "Vue | Sass",
        image: "trainn-assignment.png",
        link: "https://poetic-daifuku-99449b.netlify.app/",
        description:
          "Developed a files and folder management app similar to Google Drive.",
      },
    ],
  },
  {
    title: "Finoculus Software India Pvt Ltd.",
    period: "Feb 2019 - Feb 2022",
    items: [
      {
        name: "Skooly Mobile App",
        technologies: "Ionic | Angular | Sass",
        image: "app.png",
        link: "https://play.google.com/store/apps/details?id=com.skooly.app",
        description:
          "Developed and deployed over 35 screens for the Skooly mobile app.",
      },
      {
        name: "Skooly Marketing Site",
        technologies: "Html | Css | JavaScript | Eleventy",
        image: "skooly1.png",
        link: "https://getskooly.com/schools/en/",
        description:
          " Designed and developed all pages of the marketing site using Eleventy as the static site generator.",
      },
      {
        name: "Skooly Marketplace",
        technologies: "Angular | Sass",
        image: "skooly2.png",
        link: "https://getskooly.com/",
        description:
          "Developed authentication, quickChat, dashboard, and other UIs for school/academy management web app.",
      },
      {
        name: "Skooly Online Schools",
        technologies: "Vue | Sass",
        image: "online-schools.png",
        link: "https://getskooly.com/",
        description:
          "Developed UI for a web app where users can list their courses and schedules.",
      },
      {
        name: "Xerovi Admin Dashboard",
        technologies: "Vue | Sass",
        image: "xv-admin.png",
        link: "https://xv-admin-gracious-cray-c760c5.netlify.app/",
        description:
          "Designed/Developed a platform where admin can monitor the building during the pandemic time.",
      },
      {
        name: "Xerovi Marketing Site",
        technologies: "Html | Css | JavaScript",
        image: "xv.png",
        link: "https://mystifying-bardeen-970f17.netlify.app",
        description: "Designed/developed a landing page for the Xerovi app.",
      },
      {
        name: "Form Builder",
        technologies: "Vue | Sass",
        image: "form-admin.png",
        link: "https://form-creator-zealous-meninsky-54ec22.netlify.app/",
        description:
          "Platform where users can create HTML forms using drag and drop function.",
      },
      {
        name: "Interview Assessment",
        technologies: "Html | Css | JavaScript",
        image: "finoculus-assignment.png",
        link: "https://peppy-cendol-81ca4a.netlify.app/",
        description: "Landing page as an Assignment for Finoculus.",
      },
    ],
  },
  {
    title: "Freelance",
    items: [
      {
        name: "Namespace Labs",
        technologies: "React | NextJs | Typescript | Tailwind",
        image: "namespace.png",
        link: "https://www.namespace.so/pricing",
        description: "Revamped the pricing page of their marketing site.",
      },
      {
        name: "Sri Venkateswara Company",
        technologies: "Html | Css | JavaScript | jQuery | Bootstrap",
        image: "svs.png",
        link: "https://www.srivenkateswaracompany.com/",
        description: "Developed a landing page for a client.",
      },
      {
        name: "RMS Logistics",
        technologies: "Html | Css | JavaScript | jQuery | Bootstrap",
        image: "smss.png",
        link: "https://rms-logistics.in/",
        description: "Developed a landing page for a client.",
      },
      {
        name: "Tiasenergy",
        technologies: "Html | Css | JavaScript | jQuery",
        image: "tias.png",
        link: "https://www.tiasenergy.com/",
        description: "Developed a landing page for your client.",
      },
    ],
  },
  {
    title: "Collaborations with Friends",
    items: [
      {
        name: "GPT Tutorials",
        technologies: "Vue | Nuxt | Sass",
        image: "gpttutorials.png",
        link: "https://gpttutorials.io/",
        description:
          "Developed a website where users can see reviews and use cases of GPT software.",
      },
      {
        name: "StackAI",
        technologies: "Vue | Nuxt | Sass",
        image: "stackai.png",
        link: "https://stackai.co/",
        description:
          "Developed a website where users can see reviews of AI apps.",
      },
    ],
  },
  {
    title: "Personal Projects",
    items: [
      {
        name: "Findsnippets",
        technologies: "Nuxt | Sass",
        image: "findsnippets.png",
        link: "https://deft-bavarois-3cda74.netlify.app/",
        description:
          "Platform where users can search and see Programming code snippets.",
      },
      {
        name: "Watch Trailers",
        technologies: "Nuxt | Sass",
        image: "watch-trailers.png",
        link: "https://watch-trailers.netlify.app/",
        description:
          "Developed a website where users can watch the latest trailers.",
      },
      {
        name: "Uisnip",
        technologies: "Nuxt | Sass",
        image: "uisnip.png",
        link: "https://uisnip.netlify.app/",
        description:
          "Developed a website where I can post UI code snippets with a preview.",
      },
      {
        name: "Templatezip",
        technologies: "Nuxt | Sass | Firebase | Stripe",
        image: "templatezip.png",
        link: "https://templatezip-6c163f-1997-09-11-master-test-v1.netlify.app/",
        description:
          "Platform to sell Website/Ionic templates. Integrated with 'Stripe' for payments.",
      },
      {
        name: "Webdevfix",
        technologies: "Nuxt | Sass",
        image: "webdevfix.png",
        link: "https://regal-sunflower-1eb4ea.netlify.app/",
        description:
          "Blogging site where I used to post articles related to web development.",
      },
      {
        name: "Webdevfix V2",
        technologies: "Nuxt | Sass",
        image: "webdevfix-v2.png",
        link: "https://luxury-douhua-ff4b5c.netlify.app/",
        description:
          "Blogging site where I used to post articles related to web development.",
      },
      {
        name: "Easy Recipes",
        technologies: "Angular | Sass",
        image: "easy-recipes.png",
        link: "https://ubiquitous-sprinkles-8ebcd3.netlify.app/",
        description:
          "Platform where users can view and add Food Recipes. Experimental/Unfinished project.",
      },
      {
        name: "Website Builder",
        technologies: "Vue 3 | Sass",
        image: "web-builder.png",
        link: "https://angry-albattani-0b857d.netlify.app",
        description:
          "Platform where users can create webpages using the drag and drop method. Experimental project.",
      },
      {
        name: "Programming Reference",
        technologies: "Html | Css | JavaScript",
        image: "js-ref.png",
        link: "https://jsref-cocky-spence-0b6696.netlify.app/js_ref",
        description: "Cheatsheet that I used to have a quick look at syntaxes.",
      },
      {
        name: "Drawing Board",
        technologies: "Html | Css | JavaScript | External library",
        image: "board.png",
        link: "https://friendly-mayer-211aa3.netlify.app/",
        description:
          "A drawing board where the user can use the mouse to draw on the screen. Experimental project.",
      },
      {
        name: "Fallinfo - A Blogging Site",
        technologies: "Html | Css | JavaScript | jQuery",
        image: "fallinfo.png",
        link: "https://naughty-montalcini-80b80f.netlify.app/",
        description:
          "A blogging website I've developed to post articles about development. Experimental project.",
      },
      {
        name: "Fallinfo 2 - A Blogging Site",
        technologies: "Html | Css | JavaScript | jQuery",
        image: "fallinfo-2.png",
        link: "https://upbeat-ritchie-7dac35.netlify.app",
        description:
          "A blogging website I've developed to post articles about development. Experimental project.",
      },
      {
        name: "HTML Table Generator",
        technologies: "Vue | Sass",
        image: "html-table.png",
        link: "https://hungry-brahmagupta-7056b6.netlify.app/",
        description:
          "Website where users can generate large sets of HTML tables with GUI. Experimental project.",
      },
      {
        name: "YouVsBot",
        technologies: "Vue | Sass",
        image: "youvsbot.png",
        link: "https://zen-pike-e7a567.netlify.app/#/",
        description:
          "Simple gaming web app with 4 different games. Learning/Experimental project.",
      },
    ],
  },
];

const highlights = [
  [
    {
      image: "pl2.png",
    },
    {
      image: "pl3.png",
    },
    {
      image: "pl4.png",
    },
    {
      image: "pl1.png",
    },
    {
      image: "pl7.png",
    },
    {
      image: "pl5.png",
    },
    {
      image: "pl8.png",
    },
    {
      image: "pl11.png",
    },
    {
      image: "pl6.png",
    },
    {
      image: "pl9.png",
    },
    {
      image: "pl10.png",
    },
  ],
  [
    {
      image: "pl3.png",
    },
    {
      image: "pl18.png",
    },
    {
      image: "pl5.png",
    },
    {
      image: "pl7.png",
    },
    {
      image: "pl17.png",
    },
    {
      image: "pl9.png",
    },
    {
      image: "pl1.png",
    },
    {
      image: "pl11.png",
    },
    {
      image: "pl16.png",
    },
    {
      image: "pl13.png",
    },
    {
      image: "pl15.png",
    },
  ],
  [
    {
      image: "pl8.png",
    },
    {
      image: "pl10.png",
    },
    {
      image: "pl15.png",
    },
    {
      image: "pl9.png",
    },
    {
      image: "pl11.png",
    },
    {
      image: "pl12.png",
    },
    {
      image: "pl14.png",
    },
    {
      image: "pl16.png",
    },
    {
      image: "pl13.png",
    },
    {
      image: "pl18.png",
    },
    {
      image: "pl17.png",
    },
  ],
];

const companies = [
  {
    image: "trainn.png",
    invert: true,
  },
  {
    image: "skooly.png",
  },
  {
    image: "namespace.png",
    invert: true,
  },
  {
    image: "tias-energy.png",
  },
];

// Components
function Header(props) {
  const [offset, setOffset] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const [showBg, setShowBg] = React.useState(false);

  function onScroll() {
    let scroll = window.scrollY;
    setOffset((val) => {
      if (val > scroll) {
        setShow(true);
      } else {
        if (scroll > 100) {
          setShow(false);
        }
      }
      return scroll;
    });

    if (scroll > 100) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  }
  React.useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div
      className={`max-w-screen-2xl mx-auto sticky z-50 top-0 transition-all duration-300 
      ${showBg ? bgSecondary : null} 
      ${!show ? "opacity-0 -translate-y-4" : null}`}
    >
      <div className="mx-auto px-6 md:px-12 py-3 text-center md:justify-between md:flex">
        <div className="font-semibold text-white text-xl cursor-default mb-3 md:mb-0 ">
          Balathanusan Jeyarasan
        </div>
        <div className="space-x-3 md:space-x-6">
          <span
            onClick={() => goTo("highlights")}
            className="cursor-pointer text-white/50 hover:text-white transition-colors"
          >
            Highlights
          </span>
          <span
            onClick={() => goTo("skills")}
            className="cursor-pointer text-white/50 hover:text-white transition-colors"
          >
            Skills
          </span>
          <span
            onClick={() => goTo("projects")}
            className="cursor-pointer text-white/50 hover:text-white transition-colors"
          >
            Projects
          </span>
          <span
            onClick={() => goTo("contact")}
            className="cursor-pointer text-white/50 hover:text-white transition-colors"
          >
            Contact
          </span>
        </div>
      </div>
    </div>
  );
}

function Hero(props) {
  function viewed(site) {
    window._fb.updateDoc(
      window._fb.doc(window._fb.db, "Views", window._fb.docRef.id),
      {
        viewed: window._fb.arrayUnion(site),
      }
    );
  }
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 flex flex-col sm:flex-row gap-3 md:gap-6">
      <div className="flex-1 flex items-center">
        <div className="w-full">
          <div className="font-medium md:text-lg text-white/80">
            Hi, I'm Thanusan
          </div>
          <div className="font-bold text-3xl md:text-5xl mt-2">
            Frontend Developer
          </div>
          <p className="text-white/80 md:text-lg font-medium max-w-lg mt-2">
            A passionate Engineer with 4+ years of professional experience
            crafting modern, dynamic and responsive user interfaces.
          </p>
          <div className="mt-8 flex gap-4 items-center">
            <a
              onClick={() => viewed("Email")}
              className="transition-transform hover:scale-125"
              href={"mailto:" + myEmail}
            >
              <img className="w-6" src="./assets/icons/mail-outline.svg" />
            </a>
            <a
              onClick={() => viewed("LinkedIn")}
              className="transition-transform hover:scale-125"
              target="_blank"
              href={myLinkedIn}
            >
              <img className="w-6" src="./assets/icons/logo-linkedin.svg" />
            </a>
            <a
              onClick={() => viewed("Github")}
              className="transition-transform hover:scale-125"
              target="_blank"
              href={myGitHub}
            >
              <img className="w-6" src="./assets/icons/logo-github.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          className="w-full max-w-96 md:max-w-xl shadow-lg object-cover"
          src="./assets/profile-grad.png"
        />
      </div>
    </div>
  );
}

function Highlights(props) {
  const [animationPause, setAnimationPause] = React.useState(null);
  function pause(id) {
    setAnimationPause(id);
  }
  function resume(id) {
    setAnimationPause(null);
  }
  return (
    <div
      id="highlights"
      className="max-w-screen-2xl mx-auto overflow-hidden p-12"
    >
      <div className="font-bold text-center mb-8 text-2xl">Highlights</div>

      {highlights.map((group, index) => {
        return (
          <div
            key={"group" + index}
            onMouseEnter={() => pause(index)}
            onMouseLeave={() => resume(index)}
            className={`marquee ${
              index % 2 == 0 ? "left-to-right" : "right-to-left"
            } ${animationPause == index ? "pause" : null}`}
          >
            {group.map((item) => {
              return (
                <div key={item.image}>
                  <img
                    className="min-w-48 max-w-48 sm:min-w-64 sm:max-w-64 md:min-w-96 md:max-w-96"
                    src={"./assets/highlights/" + item.image}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function Skills(props) {
  return (
    <div id="skills" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="font-bold text-center mb-8 text-2xl">
        Technology Proficiency
      </div>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className={`${bgSecondary} ${bgShadow} rounded-md py-4 flex-1 sm:flex-none px-8 flex flex-col items-center cursor-default`}
            >
              <img
                className={`${skill.iconInvert ? "invert" : null} w-6 h-6 mb-2`}
                src={"./assets/skills/" + skill.icon}
              />
              <span className="font-medium text-white/50">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Projects(props) {
  function view(name) {
    window._fb
      .updateDoc(window._fb.doc(window._fb.db, "Views", window._fb.docRef.id), {
        clicks: window._fb.arrayUnion(name),
      })
      .then(() => {})
      .catch(() => {});
  }

  return (
    <div id="projects" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="font-bold text-center text-2xl">Projects</div>
      <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12 my-20">
        {companies.map((company) => {
          return (
            <div
              key={company.image}
              className={`grayscale select-none pointer-events-none ${
                company.invert ? "invert opacity-50" : null
              }`}
            >
              <img
                className="h-full max-h-5 sm:max-h-none sm:h-6 md:h-8"
                src={"./assets/companies/" + company.image}
              />
            </div>
          );
        })}
      </div>
      <div className="space-y-14">
        {projects.map((project) => {
          return (
            <div key={project.title}>
              <div className="font-semibold mb-6 text-lg">
                {project.title}{" "}
                <span className="text-white/50 font-normal ml-3 text-sm">
                  {project.period ? project.period : null}
                </span>{" "}
              </div>
              <div className="grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {project.items.map((item) => {
                  return (
                    <div
                      key={item.name}
                      className={`${bgSecondary} rounded-md flex flex-col overflow-hidden`}
                    >
                      <img
                        className="w-full rounded-md shadow-lg shadow-black/50"
                        src={"./assets/projects/" + item.image}
                      />
                      <div className="pt-3 px-3 flex flex-col h-full">
                        <p className="text-white/80">{item.name}</p>
                        <p className="text-white/50 text-sm mt-2">
                          {item.technologies}
                        </p>
                        <p className="text-white/50 text-sm mt-2 mb-3">
                          {item.description}
                        </p>
                        <a
                          onClick={() => {
                            view(item.name);
                          }}
                          href={item.link}
                          target="_blank"
                          className="text-white/50 w-full block mt-auto py-3 text-center text-sm hover:text-white border-t border-t-[#000000]"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-white/50 text-lg text-center mt-16 italic">
        "In the realm of creativity, every abandoned project is a stepping stone
        to mastery."
      </div>
    </div>
  );
}

function Contact(props) {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messageError, setMessageError] = React.useState(false);

  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  function onEmail(e) {
    setEmail((prev) => {
      if (
        !e.target.value ||
        !e.target.value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      return e.target.value;
    });
  }
  function onMessage(e) {
    setMessage((prev) => {
      if (!e.target.value) {
        setMessageError(true);
      } else {
        setMessageError(false);
      }
      return e.target.value;
    });
  }

  function submit() {
    if (submitting) {
      return;
    }
    if (!email || emailError) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }
    if (!message || messageError) {
      setMessageError(true);
      return;
    } else {
      setMessageError(false);
    }

    setSubmitting(true);

    window._fb
      .updateDoc(window._fb.doc(window._fb.db, "Views", window._fb.docRef.id), {
        contact: window._fb.arrayUnion({
          email: email,
          message: message,
        }),
      })
      .then(() => {
        setSubmitSuccess(true);
        setTimeout(() => {
          clear();
        }, 3000);
      })
      .catch(() => {
        setSubmitError(true);
      });
  }

  function clear() {
    setEmail("");
    setMessage("");
    setSubmitError(false);
    setSubmitSuccess(false);
    setSubmitting(false);
  }

  return (
    <div id="contact" className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:flex">
      <div className="flex-1">
        <div className="font-bold text-2xl sm:text-4xl mb-4">
          Anything else? <br /> Let's talk
        </div>
        <span className="text-white/50">
          Reach out via Email:{" "}
          <a
            href={"mailto:" + myEmail}
            className="transition-colors hover:text-white/80"
          >
            {myEmail}
          </a>
        </span>
      </div>
      <div className="felx flex-col flex-1 space-y-2 mt-10">
        <div className="">
          <input
            value={email}
            onChange={onEmail}
            className={`${bgSecondary} w-full  p-3 rounded-md text-white/80 placeholder:text-white/50 hover:outline-none active:outline-none border border-transparent focus:border-white/80 focus:outline-none disabled:opacity-50`}
            type="text"
            placeholder="Email"
            disabled={submitting}
          />
          <span
            className={`text-sm text-red-700 ${
              emailError ? "opacity-1" : "opacity-0"
            }`}
          >
            Enter a valid Email
          </span>
        </div>
        <div>
          <textarea
            value={message}
            onChange={onMessage}
            className={`${bgSecondary} w-full p-3 rounded-md text-white/80 placeholder:text-white/50 hover:outline-none active:outline-none border border-transparent focus:border-white/80 focus:outline-none resize-none disabled:opacity-50`}
            placeholder="Message"
            rows="8"
            disabled={submitting}
          ></textarea>
          <span
            className={`text-sm text-red-700 ${
              messageError ? "opacity-1" : "opacity-0"
            }`}
          >
            Enter the message
          </span>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={submit}
            className={`rounded-md py-3 px-10 text-white/50 transition-colors hover:text-white ${bgSecondary} disabled:opacity-50`}
            disabled={submitting}
          >
            Send
          </button>
          {submitSuccess ? (
            <span className={`${textTheme}`}>Thank you. Message received.</span>
          ) : null}
          {submitError ? (
            <span className={`text-red-700`}>Something went wrong.</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Footer(props) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex justify-center">
      <p className="text-white/50 text-sm text-center">
        All rights reserved &copy; <span>{new Date().getFullYear()}</span>{" "}
        <a href="/" className="text-white/80">
          balathanusan.github.io
        </a>
        .
      </p>
    </div>
  );
}

function App() {
  console.log(
    "%cI'm not a great programmer; I'm just a good programmer with great habits (of Googling).",
    [
      "font-size: 12px",
      "font-family: monospace",
      "background: #00f9d0",
      "display: inline-block",
      "color: black",
      "padding: 8px 20px",
      "margin: 8px 19px",
      "border: 1px dashed;",
    ].join(";")
  );

  return (
    <div className={`${bgPrimary} text-white`}>
      <Header></Header>
      <Hero></Hero>
      <div className="space-y-24 md:space-y-32">
        <Highlights></Highlights>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
const element = <App />;
root.render(element);
